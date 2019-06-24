import { combineReducers } from 'redux';

import appReducer from './app';
import authReducer from './auth';
import surveyReducer from './survey';
import spotifyReducer from './spotify';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  survey: surveyReducer,
  spotify: spotifyReducer,
});

export default rootReducer;
