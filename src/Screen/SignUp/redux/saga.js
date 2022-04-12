import {Alert, ToastAndroid} from 'react-native';
import {put, takeLatest} from 'redux-saga/effects';
import {apiSignUp} from '../../../Config/api';
import {navigate} from '../../../Helper/navigate';

export function* signupSaga(action) {
  const registerSuccessToast = () => {
    ToastAndroid.showWithGravity(
      'Register Akun Berhasil',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  const registerFailedToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Register Gagal',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      350,
    );
  };
  try {
    const res = yield apiSignUp(action.payload);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      registerSuccessToast();
      yield put({type: 'signUp_berhasil'});
      navigate('SignIn');
    } else {
      registerFailedToast();
      yield put({type: 'LOGIN_GAGAL'});
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    registerFailedToast();
    yield put({type: 'LOGIN_GAGAL'});
  }
}

export function* signupSagas() {
  yield takeLatest('signUp', signupSaga);
}
