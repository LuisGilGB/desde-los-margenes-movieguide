import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import routerMiddleware from './middlewares/routerMiddleware';
import reducers from './reducers';
import sagas from './sagas';

const initialState = {}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware,
    routerMiddleware
];

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(sagas);

export default store;