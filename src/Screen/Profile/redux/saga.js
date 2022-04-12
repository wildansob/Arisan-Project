import {put, takeLatest, select} from 'redux-saga/effects';
import {apiProfile} from '../../../Config/api';

export function* ProfileSaga(action) {
  
  try {
    const token = yield select(state => state.loginReducer.token);
    const res = yield apiProfile(action.payload, token);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      yield put({type: 'PROFILE', payload: res.data.result});
    } else {
      console.info('e', e);
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
  }
}

export function* ProfileSagas() {
  yield takeLatest('GET_PROFILE', ProfileSaga);
}
