import {takeLatest, select, put} from 'redux-saga/effects';
import {Alert, ToastAndroid} from 'react-native';
import {apiCreateArisan} from '../../../Config/api';
import {navigate} from '../../../Helper/navigate';

export function* createArisanSaga(action) {
  const createArisanSuccessToast = () => {
    ToastAndroid.showWithGravity(
      'Arisan Berhasil Dibuat',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const token = yield select(state => state.loginReducer.token);
    const res = yield apiCreateArisan(action.payload, token);
    console.log(res, '1');
    if (res.status === 201) {
      console.log('2');

      yield put({type: 'GET_HOME'});
      navigate('List Arisan');
      createArisanSuccessToast();
    } else {
      Alert.alert('Gagal', 'Terjadi Kesalahan');
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    Alert.alert('Gagal', 'Terjadi Kesalahan');
  }
}

export function* CreateArisanSaga() {
  yield takeLatest('POST_CREATE_ARISAN', createArisanSaga);
}
