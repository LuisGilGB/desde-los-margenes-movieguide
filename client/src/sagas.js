import {all} from 'redux-saga/effects';
import navigationLogicSagas from './navigationLogic/navigationLogicSagas';

export default function* sagas () {
    yield all([
        ...navigationLogicSagas
    ]);
}