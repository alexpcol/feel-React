import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'

var middleware = [thunk]

if (__DEV__) {
    const logger = createLogger({ collapsed: true });
    middleware =  [...middleware, logger];
} else {
    middleware = [...middleware];
}

const store = createStore(reducers, applyMiddleware(...middleware))

export default store