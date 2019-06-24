import { combineReducers } from 'redux';

import appReducer from './app';
import authReducer from './auth';
import surveyReducer from './survey';

// TODO: refactor state keys into CamelCase
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  survey: surveyReducer,
});

export default rootReducer;
