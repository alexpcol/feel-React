import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

let middleware = [thunk];


if (__DEV__) {
  const logger = createLogger({ collapsed: true });
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

export default function createReduxStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  );
}
