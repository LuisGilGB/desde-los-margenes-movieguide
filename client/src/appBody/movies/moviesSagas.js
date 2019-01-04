import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {actionCreators as navLogicActionCreators} from '../../navigationLogic/navigationLogicActions'
import {actions, actionCreators} from './moviesActions';
import {ROUTES} from '../../routes';

// services/api.js
const doRequestRandomMovie = () => axios.get('/api/movies/randommovie');

function* requestRandomMovie (opts) {
    const { payload: { history } } = opts;
    try {
        const { data } = yield call(doRequestRandomMovie);

        console.log(data);
        yield put(navLogicActionCreators.navigateWithPush(history, ROUTES.MOVIES.DETAIL, {movieId: data._id}));
    }
    catch (err) {
        console.log(err);
    }
}

const moviesSagas = [
    takeLatest(actions.REQUEST_RANDOM_MOVIE, requestRandomMovie)
];

export default moviesSagas;