import {put, takeLatest, select} from 'redux-saga/effects';
import {Alert, ToastAndroid} from 'react-native';
import {
  apiGetAllParticipant,
  apiDeleteParticipant,
  apiAddParticipant,
  apiEditStatusPembayaran,
  apiKocokArisan,
  apiArisanById,
  apiFilterParticipant,
  apiHistoryArisan,
} from '../../../Config/api';
import {navigate} from '../../../Helper/navigate';

export function* participant() {
  try {
    const id = yield select(
      state => state.DetailArisanReducer.dataDetailArisan.arisanId,
    );
    const {token} = yield select(state => state.loginReducer);
    const res = yield apiGetAllParticipant(id, token);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      yield put({type: 'PARTICIPANT', payload: res.data.result});
      yield put({type: 'GET_HOME'});
    } else {
      console.log(e);
    }
  } catch (e) {
    console.log('3');
    Alert.alert('Kesalahan Participant');
  }
}

export function* deleteParticipant(action) {
  const deleteParticipantSuccessToast = () => {
    ToastAndroid.showWithGravity(
      'Participant Berhasil di Hapus',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const deleteParticipantFailedToast = () => {
    ToastAndroid.showWithGravity(
      'Admin Tidak Dapat Di hapus',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const {token} = yield select(state => state.loginReducer);
    const res = yield apiDeleteParticipant(action.id, token);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      yield put({type: 'GET_PARTICIPANT'});
      navigate('Detail Arisan');
      deleteParticipantSuccessToast();
    } else {
      deleteParticipantFailedToast();
      navigate('Detail Arisan');
      console.log('error');
    }
  } catch (e) {
    console.log('3');
    console.info('error');
    Alert.alert('Kesalahan Menghapus Participant');
  }
}

export function* addParticipant(action) {
  const AddParticipantFailedToast = () => {
    ToastAndroid.showWithGravity(
      'Gagal Menambahkan Participant',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const id = yield select(
      state => state.DetailArisanReducer.dataDetailArisan.arisanId,
    );
    const {token} = yield select(state => state.loginReducer);
    const res = yield apiAddParticipant(id, action.payload, token);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      yield put({type: 'GET_PARTICIPANT'});
      navigate('Detail Arisan');
    } else {
      AddParticipantFailedToast();
      console.log(e);
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    AddParticipantFailedToast();
  }
}
export function* editStatus(action) {
  const EditStatusFailedToast = () => {
    ToastAndroid.showWithGravity(
      'Periksa Kembali Status Pembayaran',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const {token} = yield select(state => state.loginReducer);
    const res = yield apiEditStatusPembayaran(action.id, action.payload, token);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      yield put({type: 'GET_PARTICIPANT'});
      navigate('Detail Arisan');
    } else {
      navigate('Detail Arisan');
      EditStatusFailedToast();
    }
  } catch (e) {
    console.log('3');
    EditStatusFailedToast();
  }
}
export function* kocokArisan(action) {
  const kocokArisanAllMenangToast = () => {
    ToastAndroid.showWithGravity(
      'Semua Peserta Sudah Menang',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  };
  try {
    const {token} = yield select(state => state.loginReducer);
    const res = yield apiKocokArisan(action.id, token);
    console.log(res, '1');
    if (res.status === 200) {
      yield put({type: 'PEMENANG_ARISAN', payload: res.data.result});
      console.log('2');
      navigate('Pemenang Arisan');
    } else if (res.status === 400) {
      navigate('Detail Arisan');
      kocokArisanAllMenangToast();
    }
  } catch (e) {
    console.log('3');
    kocokArisanAllMenangToast();
  }
}
export function* arisanById() {
  try {
    const id = yield select(
      state => state.DetailArisanReducer.dataDetailArisan.arisanId,
    );
    const {token} = yield select(state => state.loginReducer);
    const res = yield apiArisanById(id, token);
    console.log(res, '1');
    if (res.status === 201) {
      console.log('2');
      yield put({type: 'DETAIL_ARISAN', payload: res.data.result});
    } else {
      Alert.alert('Kesalahan Mengambil arisan By id');
      console.log(e);
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    Alert.alert('Kesalahan Mengambil arisan By id');
  }
}

export function* belumMenang(action) {
  try {
    const {token} = yield select(state => state.loginReducer);
    const res = yield apiFilterParticipant(action.id, action.payload, token);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      yield put({type: 'BELUM_MENANG_REDUCER', payload: res.data.result});
    } else {
      Alert.alert('Kesalahan Mengambil yang Belum Menang');
    }
  } catch (e) {
    console.log('3');
    Alert.alert('Kesalahan Mengambil yang Belum Menang');
  }
}

export function* historyArisan() {
  try {
    const id = yield select(
      state => state.DetailArisanReducer.dataDetailArisan.arisanId,
    );
    const {token} = yield select(state => state.loginReducer);
    const res = yield apiHistoryArisan(id, token);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      yield put({type: 'HISTORY_ARISAN_REDUCER', payload: res.data.result});
    } else {
      Alert.alert('history gagal');
    }
  } catch (e) {
    console.log('3');
    Alert.alert('history gagal');
  }
}

export function* DetailArisanSaga() {
  yield takeLatest('GET_PARTICIPANT', participant);
  yield takeLatest('DELETE_PARTICIPANT', deleteParticipant);
  yield takeLatest('ADD_PARTICIPANT', addParticipant);
  yield takeLatest('EDIT_STATUS_PEMBAYARN', editStatus);
  yield takeLatest('KOCOK_ARISAN', kocokArisan);
  yield takeLatest('ARISAN_BY_ID', arisanById);
  yield takeLatest('BELUM_MENANG', belumMenang);
  yield takeLatest('HISTORY_ARISAN', historyArisan);
}
