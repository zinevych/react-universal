import { combineReducers } from 'redux';
import staticItems from './staticItems';
import remoteItems from './remoteItems';
import selectedRemoteItem from './selectedRemoteItem';

const appReducer = combineReducers({
  staticItems,
  remoteItems,
  selectedRemoteItem
});

export default appReducer;
