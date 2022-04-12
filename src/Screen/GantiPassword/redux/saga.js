import {put, takeLatest, select} from 'redux-saga/effects';
import {Alert, ToastAndroid} from 'react-native';
import {apiGantiPassword} from '../../../Config/api';
import {navigate} from '../../../Helper/navigate';

export function* gantiPasswordSaga(action) {
  const editPasswordSuccessToast = () => {
    ToastAndroid.showWithGravity(
      'Password Berhasil Diubah',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const editPasswordFailedToast = () => {
    ToastAndroid.showWithGravity(
      'Edit Password Gagal',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const {token} = yield select(state => state.loginReducer);
    const res = yield apiGantiPassword(action.payload, token);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      editPasswordSuccessToast();
      navigate('profile');
    } else {
      editPasswordFailedToast();
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    editPasswordFailedToast();
  }
}

export function* gantiPasswordWatcher() {
  yield takeLatest('GANTI_PASSWORD', gantiPasswordSaga);
}
