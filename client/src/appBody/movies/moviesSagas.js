import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {actionCreators as navLogicActionCreators} from '../../navigationLogic/navigationLogicActions'
import {actions, actionCreators} from './moviesActions';
import {ROUTES} from '../../routes';

const doLoadMovies = () => axios.get('/bff/movies');
const doLoadMovieDetail = movieId => axios.get(`/bff/movies/movie/${movieId}`);
const doRequestRandomMovie = () => axios.get('/api/movies/randommovie');

function* loadMovies (opts) {
    try {
        const { data } = yield call(doLoadMovies);

        yield put(actionCreators.loadMoviesDone(data));
    }
    catch (err) {
        console.log(err);
        yield put(actionCreators.loadMoviesFailed());
    }
}

function* loadMovieDetail (opts) {
    const { payload: { movieId } } = opts;
    try {
        const { data } = yield call(doLoadMovieDetail, movieId);

        yield put(actionCreators.loadMovieDetailDone(data));
    }
    catch (err) {
        console.log(err);
        yield put(actionCreators.loadMovieDetailFailed());
    }
}

function* requestRandomMovie (opts) {
    const { payload: { history } } = opts;
    try {
        const { data } = yield call(doRequestRandomMovie);

        yield put(navLogicActionCreators.navigateWithPush(history, ROUTES.MOVIES.DETAIL, data));
    }
    catch (err) {
        console.log(err);
    }
}

const moviesSagas = [
    takeLatest(actions.LOAD_MOVIES, loadMovies),
    takeLatest(actions.LOAD_MOVIE_DETAIL, loadMovieDetail),
    takeLatest(actions.REQUEST_RANDOM_MOVIE, requestRandomMovie)
];

export default moviesSagas;