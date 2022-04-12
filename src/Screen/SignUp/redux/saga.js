import {Alert} from 'react-native';
import {put, takeLatest} from 'redux-saga/effects';
import {apiSignUp} from '../../../Config/api';
import {navigate} from '../../../Helper/navigate';

export function* signupSaga(action) {
  try {
    const res = yield apiSignUp(action.payload);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      Alert.alert('Register Akun Berhasil');
      yield put({type: 'signUp_berhasil'});
      navigate('SignIn');
    } else {
      Alert.alert('Register Gagal');
      yield put({type: 'LOGIN_GAGAL'});
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    Alert.alert('SignUp gagal');
    yield put({type: 'LOGIN_GAGAL'});
  }
}

export function* signupSagas() {
  yield takeLatest('signUp', signupSaga);
}
