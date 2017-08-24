import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools';
import middleware from './middleware';
import { install } from 'redux-loop';

import reducer from './Reducer';

const composeEnhancers = composeWithDevTools({realtime: true, port: 8000});
const store = createStore(reducer, null, composeEnhancers(
    applyMiddleware(...middleware),
    install()
))

export default store