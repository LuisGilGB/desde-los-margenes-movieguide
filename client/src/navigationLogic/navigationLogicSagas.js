import { actions } from './navigationLogicActions';
import { takeEvery } from 'redux-saga/effects';

const navigateWithPush = (opts) => {
  const {
    payload: { path, params = {} },
    history,
  } = opts;

  const destinationPath = Object.keys(params).reduce(
    (path0, pKey) => path0.replace(`:${pKey}`, params[pKey]),
    path,
  );

  history.push(destinationPath);
};

export default [takeEvery(actions.NAVIGATE_WITH_PUSH, navigateWithPush)];
