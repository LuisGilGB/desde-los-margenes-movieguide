const createRouterMiddleware = (history) => (store) => (next) => (action) =>
  next({
    ...action,
    history,
  });

export default createRouterMiddleware;
