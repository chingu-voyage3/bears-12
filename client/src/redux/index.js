import { combineReducers } from 'redux';
import template from './modules/template';
import loggedInReducer from './modules/oauth.js';

const allReducers = combineReducers({
  template,
  loggedInReducer
});

export default allReducers;
