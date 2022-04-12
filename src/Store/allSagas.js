import {all} from 'redux-saga/effects';

//saga
import {LoginSaga} from '../Screen/Login/redux/saga';
import {ProfileSagas} from '../Screen/Profile/redux/saga';
import {signupSagas} from '../Screen/SignUp/redux/saga';
import {gantiPasswordWatcher} from '../Screen/GantiPassword/redux/saga';
import {EditProfileSaga} from '../Screen/EditProfile/redux/saga';
import {HomeSaga} from '../Screen/Home/redux/saga';
import {ListPesertaSaga} from '../Screen/ListPeserta/redux/saga';
import {CreateArisanSaga} from '../Screen/BuatArisan/redux/saga';
import {DetailArisanSaga} from '../Screen/DetailArisan/redux/saga';
import {searchSaga} from '../Screen/SearchArisan/redux/searchSaga';

export function* allSaga() {
  yield all([
    LoginSaga(),
    signupSagas(),
    ProfileSagas(),
    gantiPasswordWatcher(),
    EditProfileSaga(),
    HomeSaga(),
    ListPesertaSaga(),
    CreateArisanSaga(),
    DetailArisanSaga(),
    searchSaga(),
  ]);
}
