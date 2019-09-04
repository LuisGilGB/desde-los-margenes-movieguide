import React from 'react';
import './App.css';

const initialState = {
    isLoggedIn: false,
    logInIsFetching: false,
    userName: '',
    userPass: '',
    token: ''
}

const actions = {
    FETCH_LOG_IN        : 'FETCH_LOG_IN',
    FETCH_LOG_IN_DONE   : 'FETCH_LOG_IN_DONE',
    FETCH_LOG_IN_FAILED : 'FETCH_LOG_IN_FAILED',
    LOG_OUT             : 'LOG_OUT'
}

const loginReducer = (state = initialState, action) => {
    const {type, payload = {}} = action;
    const reducers = {
        [actions.FETCH_LOG_IN]: () => ({
            ...state,
            isLoggedIn: false,
            logInIsFetching: true,
            token: initialState.token
        }),
        [actions.FETCH_LOG_IN_DONE]: () => ({
            ...state,
            isLoggedIn: true,
            logInIsFetching: false,
            userPass: initialState.userPass,
            token: payload.token
        }),
        [actions.FETCH_LOG_IN_FAILED]: () => ({
            ...state,
            isLoggedIn: false,
            logInIsFetching: false
        }),
        [actions.LOG_OUT]: () => ({
            ...state,
            ...initialState
        })
    }

    return reducers[type] ? reducers[type]() : state;
}

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
            </header>
        </div>
    );
}

export default App;
