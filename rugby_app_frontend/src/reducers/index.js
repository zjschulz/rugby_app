import { combineReducers } from 'redux';
import teams from './teamReducer';
import user from './authReducer';

export default combineReducers({
  teams,
  user
});