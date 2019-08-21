const routerMiddleware = store => next => action => {
    console.log('store', store);
    console.log('next', next);
    console.log('action', action);
    const result = next(action);
    console.log('result', result);
    return result;
}

export default routerMiddleware;