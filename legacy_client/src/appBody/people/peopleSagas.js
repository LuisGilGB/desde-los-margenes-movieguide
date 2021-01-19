import {call, all, put, takeEvery, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {actions, actionCreators} from './peopleActions';

const doLoadPeople = () => axios.get('/bff/people');
const doLoadPersonData = (personId) => axios.get(`/bff/people/person/${personId}`);

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

function* loadPersonData (opts) {
    const {payload: {personId}} = opts;
    try {
        const { data } = yield call(doLoadPersonData, personId);

        yield put(actionCreators.loadPersonDataDone(data));
    }
    catch (err) {
        console.log(err);
        yield put(actionCreators.loadPersonDataFailed());
    }
}

const peopleSagas = [
    takeLatest(actions.LOAD_PEOPLE, loadPeople),
    takeLatest(actions.LOAD_PERSON_DATA, loadPersonData)
];

export default peopleSagas;