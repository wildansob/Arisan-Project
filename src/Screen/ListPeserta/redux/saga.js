import {put, takeLatest, select} from 'redux-saga/effects';
import {Alert, ToastAndroid} from 'react-native';
import {
  apiGetAllContact,
  apiCreateKontak,
  apiDeleteKontak,
  apiEditKontak,
} from '../../../Config/api';
import {navigate} from '../../../Helper/navigate';

export function* listPesertaSaga(action) {
  const getAllKontakFailedToast = () => {
    ToastAndroid.showWithGravity(
      'Gagal, Terjadi Kesalahan Kontak',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const token = yield select(state => state.loginReducer.token);
    const res = yield apiGetAllContact(action.payload, token);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      yield put({type: 'KONTAK', payload: res.data.result});
    } else {
      getAllKontakFailedToast();
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    getAllKontakFailedToast();
  }
}

export function* createKontakSaga(action) {
  const createKontakSuccessToast = () => {
    ToastAndroid.showWithGravity(
      'Peserta ditambahkkan',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const createKontakFailedToast = () => {
    ToastAndroid.showWithGravity(
      'Peserta gagal ditambahkan',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const token = yield select(state => state.loginReducer.token);
    const res = yield apiCreateKontak(action.payload, token);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      yield put({type: 'GET_KONTAK'});
      navigate('List Peserta Nested');
      createKontakSuccessToast();
    } else {
      createKontakFailedToast();
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    createKontakFailedToast();
  }
}

export function* deleteKontakSaga(action) {
  const deleteKontakSuccessToast = () => {
    ToastAndroid.showWithGravity(
      'Peserta Telah Dihapus',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const deleteKontakFailedToast = () => {
    ToastAndroid.showWithGravity(
      'Peserta Gagal Dihapus',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const token = yield select(state => state.loginReducer.token);
    const res = yield apiDeleteKontak(action.payload, token);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      yield put({type: 'GET_KONTAK'});
      navigate('List Peserta Nested');
      deleteKontakSuccessToast();
    } else {
      deleteKontakFailedToast();
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    deleteKontakFailedToast();
  }
}
export function* EditKontakSaga(action) {
  const editKontakSuccessToast = () => {
    ToastAndroid.showWithGravity(
      'Peserta Telah Diubah',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const editKontakFailedToast = () => {
    ToastAndroid.showWithGravity(
      'Peserta Gagal Diubah',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const token = yield select(state => state.loginReducer.token);
    const res = yield apiEditKontak(action.id, action.payload, token);
    console.log(res, '1');
    if (res.status == 200) {
      yield put({type: 'GET_KONTAK'});
      navigate('List Peserta Nested');
      editKontakSuccessToast();
    } else {
      editKontakFailedToast;
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    editKontakFailedToast();
  }
}

export function* ListPesertaSaga() {
  yield takeLatest('GET_KONTAK', listPesertaSaga);
  yield takeLatest('CREATE_KONTAK', createKontakSaga);
  yield takeLatest('DELETE_KONTAK', deleteKontakSaga);
  yield takeLatest('EDIT_KONTAK', EditKontakSaga);
}
