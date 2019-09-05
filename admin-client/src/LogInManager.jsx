import React, {useReducer} from 'react';
import axios from 'axios';
import {UserProvider} from './UserContext';

const initialState = {
    isLoggedIn: false,
    logInIsFetching: false,
    userMail: 'test@mail.com',
    userPass: '',
    currentUser: '',
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
            currentUser: initialState.currentUser,
            token: initialState.token
        }),
        [actions.FETCH_LOG_IN_DONE]: () => ({
            ...state,
            isLoggedIn: true,
            logInIsFetching: false,
            userMail: initialState.userMail,
            userPass: initialState.userPass,
            currentUser: payload.user,
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

const LogInManager = props => {
    const {children, ...otherProps} = props;
    const [state, dispatch] = useReducer(loginReducer, initialState);

    const onLogInDone = email => (res = {}) => {
        const {data} = res;
        data && data.success ?
            dispatch({
                type: actions.FETCH_LOG_IN_DONE,
                payload: { user: email, token: data.token.split('Bearer ')[1]}
            }) :
            dispatch({
                type: actions.FETCH_LOG_IN_FAILED,
                payload: {}
            });
    }

    const onLogInFailed = () => {
        dispatch({
            type: actions.FETCH_LOG_IN_FAILED,
            payload: {}
        });
    }

    const doLogIn = () => {
        const {userMail, userPass} = state;
        dispatch({
            type: actions.FETCH_LOG_IN,
            payload: {}
        });
        axios.post('/api/users/login', {
            email: userMail,
            password: userPass
        }).then(onLogInDone(userMail)).catch(onLogInFailed);
    }

    const logIn = doLogIn;

    const logOut = () => dispatch({type: actions.LOG_OUT, payload: {}});

    const onUserMailChange = newValue => dispatch({
        type: actions.CHANGE_USER_MAIL,
        payload: {
            value: newValue
        }
    });

    const onUserPassChange = newValue => dispatch({
        type: actions.CHANGE_USER_PASS,
        payload: {
            value: newValue
        }
    });

    const userInfoForProvider = {
        user: state.currentUser,
        token: state.token
    }

    return (
        <UserProvider value={userInfoForProvider}>
            {children({
                ...otherProps,
                ...state,
                logIn,
                logOut,
                onUserMailChange,
                onUserPassChange
            })}
        </UserProvider>
    );
}

export default LogInManager;
