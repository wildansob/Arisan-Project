import {put, takeLatest, select} from 'redux-saga/effects';
import {Alert, ToastAndroid} from 'react-native';
import {apiEditProfile, apiGantiFoto} from '../../../Config/api';
import {navigate} from '../../../Helper/navigate';

export function* editProfile(action) {
  const editProfileSuccessToast = () => {
    ToastAndroid.showWithGravity(
      'Edit Profile Berhasil',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const editProfileFailedToast = () => {
    ToastAndroid.showWithGravity(
      'Edit Profile Gagal',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const {token} = yield select(state => state.loginReducer);
    const res = yield apiEditProfile(action.payload, token);
    console.log(res, '1');
    if (res.status === 200) {
      console.log('2');
      yield put({type: 'GET_PROFILE'});
      editProfileSuccessToast();
      navigate('profile');
    } else {
      editProfileFailedToast();
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    editProfileFailedToast();
  }
}

function* editFotoProfile(action) {
  const editFotoProfileSuccessToast = () => {
    ToastAndroid.showWithGravity(
      'Edit Foto Profile Berhasil',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const editFotoProfileFailedToast = () => {
    ToastAndroid.showWithGravity(
      'Edit Foto Profile Gagal',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const {token} = yield select(state => state.loginReducer);
    const res = yield apiGantiFoto(action.payload, token);
    console.log(res, '1');
    if (res.status === 'Success') {
      console.log('2');
      yield put({type: 'GET_PROFILE'});
      editFotoProfileSuccessToast();
      navigate('profile');
    } else {
      editFotoProfileFailedToast();
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    editFotoProfileFailedToast();
  }
}

export function* EditProfileSaga() {
  yield takeLatest('EDIT_PROFILE', editProfile);
  yield takeLatest('EDIT_FOTO_PROFILE', editFotoProfile);
}
