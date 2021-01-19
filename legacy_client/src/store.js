import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createBrowserHistory} from 'history';
import createRouterMiddleware from './middlewares/routerMiddleware';
import reducers from './reducers';
import sagas from './sagas';

const createStoreAndHistory = () => {
    const initialState = {}

    const history = createBrowserHistory();

    const sagaMiddleware = createSagaMiddleware();
    const routerMiddleware = createRouterMiddleware(history);

    const middlewares = [
        routerMiddleware,
        sagaMiddleware
    ];

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(...middlewares)
    );

    sagaMiddleware.run(sagas);

    return {store, history}
}

export default createStoreAndHistory;