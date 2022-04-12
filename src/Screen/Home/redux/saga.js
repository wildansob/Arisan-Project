import {put, takeLatest, select} from 'redux-saga/effects';
import {Alert, ToastAndroid} from 'react-native';
import {
  apiDeleteArisan,
  apiEditArisan,
  apiFilter,
  apiGetAllArisan,
} from '../../../Config/api';
import {navigate} from '../../../Helper/navigate';

export function* homeSaga(action) {
  const getAllArisanFailedToast = () => {
    ToastAndroid.showWithGravity(
      'Gagal, Terjadi Kesalahan Arisan',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const token = yield select(state => state.loginReducer.token);
    const res = yield apiGetAllArisan(action.payload, token);
    console.log(res, '1');
    if (res && res.data) {
      console.log('2');
      yield put({type: 'ARISAN', payload: res.data.result});
    } else {
      getAllArisanFailedToast();
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    getAllArisanFailedToast();
  }
}

export function* DeleteArisanSaga(action) {
  const deleteArisanSuccessToast = () => {
    ToastAndroid.showWithGravity(
      'Arisan Berhasil Dihapus',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const deleteArisanFailedToast = () => {
    ToastAndroid.showWithGravity(
      'Arisan Gagal Dihapus',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const token = yield select(state => state.loginReducer.token);
    const res = yield apiDeleteArisan(action.payload, token);
    console.log(res, '1');
    if (res.status == 201) {
      yield put({type: 'GET_HOME'});
      deleteArisanSuccessToast();
    } else {
      deleteArisanFailedToast();
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    deleteArisanFailedToast();
  }
}

export function* EditArisanSaga(action) {
  const editArisanSuccessToast = () => {
    ToastAndroid.showWithGravity(
      'Arisan Berhasil Diubah',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const editArisanFailedToast = () => {
    ToastAndroid.showWithGravity(
      'Arisan Gagal Diubah',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const token = yield select(state => state.loginReducer.token);
    const res = yield apiEditArisan(action.id, action.payload, token);
    console.log(res, '1');
    if (res.status == 201) {
      yield put({type: 'GET_HOME'});
      navigate('List Arisan');
      editArisanSuccessToast();
    } else {
      editArisanFailedToast();
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    editArisanFailedToast();
  }
}

export function* FilterSaga(action) {
  try {
    const token = yield select(state => state.loginReducer.token);
    const res = yield apiFilter(action.payload, token);
    console.log(res, '1');
    if (res.status == 200) {
      yield put({type: 'SET_FILTERED_ARISAN', payload: res.data.result});
      console.log('2');
    } else {
      Alert.alert('Gagal', 'Terjadi Kesalahan Arisan');
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    Alert.alert('Gagal', 'Terjadi Kesalahan');
  }
}

export function* HomeSaga() {
  yield takeLatest('GET_HOME', homeSaga);
  yield takeLatest('DELETE_ARISAN', DeleteArisanSaga);
  yield takeLatest('EDIT_ARISAN', EditArisanSaga);
  yield takeLatest('FILTERED_ARISAN', FilterSaga);
}
