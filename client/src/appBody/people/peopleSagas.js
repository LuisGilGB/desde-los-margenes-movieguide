import {call, all, put, takeEvery, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {actions, actionCreators} from './peopleActions';

const doLoadPeople = () => axios.get('/bff/people');

function* loadPeople (opts) {
    try {
        const { data } = yield call(doLoadPeople);

        yield put(actionCreators.loadPeopleDone(data));
    }
    catch (err) {
        console.log(err);
        yield put(actionCreators.loadPeopleFailed());
    }
}

const peopleSagas = [
    takeLatest(actions.LOAD_PEOPLE, loadPeople)
];

export default peopleSagas;