import {put, takeLatest} from 'redux-saga/effects';
import {Alert, ToastAndroid} from 'react-native';
import {apiLogin} from '../../../Config/api';

export function* loginSaga(action) {
  const loginSuccessToast = () => {
    ToastAndroid.showWithGravity(
      'Login Berhasil',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  const loginFailedToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Nomor Whatsapp atau password salah',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      350,
    );
  };

  try {
    const res = yield apiLogin(action.payload);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      loginSuccessToast();
      yield put({type: 'LOGIN_BERHASIL', payload: res.data.result.token});
    } else {
      loginFailedToast();
      yield put({type: 'LOGIN_GAGAL'});
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    loginFailedToast();
    yield put({type: 'LOGIN_GAGAL'});
  }
}

export function* LoginSaga() {
  yield takeLatest('LOGIN', loginSaga);
}
