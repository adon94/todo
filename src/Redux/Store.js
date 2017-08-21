import { createStore, compose, applyMiddleware } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';
import middleware from './middleware';
import { install } from 'redux-loop';

import reducer from './Reducer';

const enhancer = compose(
    applyMiddleware(...middleware),
    install()
);

const store = createStore(reducer, null, enhancer)
export default store