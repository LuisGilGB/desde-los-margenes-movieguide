import {all} from 'redux-saga/effects';
import navigationLogicSagas from './navigationLogic/navigationLogicSagas';
import moviesSagas from './appBody/movies/moviesSagas';
import peopleSagas from './appBody/people/peopleSagas';

export default function* sagas () {
    yield all([
        ...navigationLogicSagas,
        ...moviesSagas,
        ...peopleSagas
    ]);
}