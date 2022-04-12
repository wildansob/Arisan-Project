import {searchApi} from './searchApi';
import {takeLatest, put, select} from 'redux-saga/effects';
import {ToastAndroid} from 'react-native';

function* SearchFunction(action) {
  try {
    const token = yield select(state => state.loginReducer.token);
    const res = yield searchApi(action.payload, token);
    if (res && res.data) {
      yield put({type: 'SEARCH_SUCCESS', payload: res.data.result});
    } else {
      yield put({type: 'SEARCH_FAILED'});
      ToastAndroid.showWithGravity(
        'Gagal, Terjadi Kesalahan Arisan',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  } catch (e) {
    yield put({type: 'SEARCH_FAILED'});
    ToastAndroid.showWithGravity(
      'Gagal, Terjadi Kesalahan Arisan',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }
}

export function* searchSaga() {
  yield takeLatest('SEARCH', SearchFunction);
}
