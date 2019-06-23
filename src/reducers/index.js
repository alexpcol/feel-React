import { combineReducers } from 'redux';

import appReducer from './app';
import authReducer from './auth';
import userReducer from './user';
import kardexReducer from './kardex';
import employeesReducer from './employees';
import promotionsReducer from './promotions';
import receiptsReducer from './receipts';
import headCountReducer from './headCount';
import periodSpendingReducer from './periodSpending';
import gatheredReducer from './gathered';

// TODO: refactor state keys into CamelCase
const rootReducer = combineReducers({
  app: appReducer, // App components e.g. Status bar color, loading spinner, One Signal tag updates.
  auth: authReducer, // Login, Logout user
  user: userReducer,
  kardex: kardexReducer,
  employees: employeesReducer,
  promotions: promotionsReducer,
  receipts: receiptsReducer,
  headCount: headCountReducer,
  periodSpending: periodSpendingReducer,
  gathered: gatheredReducer,
});

export default rootReducer;
