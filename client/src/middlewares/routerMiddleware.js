const createRouterMiddleware = history => store => next => action => {
    const {getState, dispatch} = store;
    console.log('store', store);
    console.log('action', action);
    const result = next(action);
    console.log('result', result);
    return result;
}

export default createRouterMiddleware;