import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware
];

const store = createStore(() => [], {}, applyMiddleware(...middlewares));

export default store;