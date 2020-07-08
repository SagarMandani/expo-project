
import { combineReducers } from 'redux';
import authReducer from './authReducer';

import * as types from '../actions/types';

const appReducer = combineReducers({
  auth: authReducer
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT) {
    state = initialState
  }
  return appReducer(state, action)
}

export default rootReducer;