import promiseMiddleware from 'redux-promise';
import { createStore, compose, applyMiddleware } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import reducer from './Reducer';
import middleware from './middleware';
import { install } from 'redux-loop';

const enhancer = compose(
    applyMiddleware(...middleware ),
    install()
);

const store = createStore(reducer, null, enhancer)
export default store