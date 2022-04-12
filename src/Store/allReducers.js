import {combineReducers} from 'redux';
import homeReducer from '../Screen/Home/redux/homeReducer';
import listPesertaReducer from '../Screen/ListPeserta/redux/ListPesertaReducer';
import loginReducer from '../Screen/Login/redux/loginReducer';
import globalReducer from './globalReducer';
import DetailArisanReducer from '../Screen/DetailArisan/redux/detailReducer';
import searchReducer from '../Screen/SearchArisan/redux/searchReducer';

export const allReducers = combineReducers({
  loginReducer,
  homeReducer,
  listPesertaReducer,
  globalReducer,
  DetailArisanReducer,
  searchReducer,
});
