import {combineReducers} from 'redux'
import moviesReducers from './appBody/movies/moviesReducers';
import peopleReducers from './appBody/people/peopleReducers';

const initialState = {
    isAuthenticated: false
}

const authReducers = (state = initialState, action) => {
    const actionReducers = {}

    return actionReducers[action.type] ? actionReducers[action.type](state, action) : state;
}

export default combineReducers({
    auth: authReducers,
    movies: moviesReducers,
    people: peopleReducers
});