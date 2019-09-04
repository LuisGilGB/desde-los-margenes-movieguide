import React, {useReducer} from 'react';
import './App.css';

const initialState = {
    isLoggedIn: false,
    logInIsFetching: false,
    userMail: 'test@mail.com',
    userPass: '',
    token: ''
}

const actions = {
    FETCH_LOG_IN        : 'FETCH_LOG_IN',
    FETCH_LOG_IN_DONE   : 'FETCH_LOG_IN_DONE',
    FETCH_LOG_IN_FAILED : 'FETCH_LOG_IN_FAILED',
    LOG_OUT             : 'LOG_OUT',
    CHANGE_USER_MAIL    : 'CHANGE_USER_MAIL',
    CHANGE_USER_PASS    : 'CHANGE_USER_PASS'
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
        }),
        [actions.CHANGE_USER_MAIL]: () => ({
            ...state,
            userMail: payload.value
        }),
        [actions.CHANGE_USER_PASS]: () => ({
            ...state,
            userPass: payload.value
        })
    }

    return reducers[type] ? reducers[type]() : state;
}

const App = () => {
    const [state, dispatch] = useReducer(loginReducer, initialState);

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <div>
                <input
                    type="email"
                    value={state.userMail}
                    onChange={({target}) => dispatch({
                        type: actions.CHANGE_USER_MAIL,
                        payload: {
                            value: target.value
                        }
                    })}
                />
                <input
                    type="password"
                    value={state.userPass}
                    onChange={({target}) => dispatch({
                        type: actions.CHANGE_USER_PASS,
                        payload: {
                            value: target.value
                        }
                    })}
                />
            </div>
        </div>
    );
}

export default App;
