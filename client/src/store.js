import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

const initialState = {}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware
];

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
);

export default store;