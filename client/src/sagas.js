import {all} from 'redux-saga/effects';
import navigationLogicSagas from './navigationLogic/navigationLogicSagas';
import moviesSagas from './appBody/movies/moviesSagas';

export default function* sagas () {
    yield all([
        ...navigationLogicSagas,
        ...moviesSagas
    ]);
}