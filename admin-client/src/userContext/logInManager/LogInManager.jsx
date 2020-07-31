import React, { useReducer } from 'react';
import axios from 'axios';
import { actions } from './actions';
import { initialState, logInReducer } from './reducers';
import {
  loadLSUser,
  saveLSUser,
  loadLSUserToken,
  saveLSUserToken
} from './persistance';
import { UserProvider } from '../UserContext';

const LogInManager = (props) => {
  const { children, ...otherProps } = props;
  const [state, dispatch] = useReducer(logInReducer, initialState);

  const onLogInDone = (email) => (res = {}) => {
    const { data } = res;
    const user = email;
    const token = data.token.split('Bearer ')[1];
    saveLSUser(user);
    saveLSUserToken(token);
    if (data && data.success) {
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      dispatch({
        type: actions.FETCH_LOG_IN_DONE,
        payload: { user, token }
      });
    } else {
      dispatch({
        type: actions.FETCH_LOG_IN_FAILED,
        payload: {}
      });
    }
  };

  const onLogInFailed = () => {
    dispatch({
      type: actions.FETCH_LOG_IN_FAILED,
      payload: {}
    });
  };

  const doLogIn = () => {
    const { userMail, userPass } = state;
    dispatch({
      type: actions.FETCH_LOG_IN,
      payload: {}
    });
    axios
      .post('/api/users/login', {
        email: userMail,
        password: userPass
      })
      .then(onLogInDone(userMail))
      .catch(onLogInFailed);
  };

  const logInFromStorage = () => {
    const user = loadLSUser();
    const token = loadLSUserToken();
    if (user && token) {
      dispatch({
        type: actions.FETCH_LOG_IN,
        payload: {}
      });
      axios
        .post(
          `/api/users/current`,
          { user },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        .then(onLoginFromStorageDone(user, token))
        .catch(onLogInFailed);
    }
  };

  const onLoginFromStorageDone = (user, token) => (res = {}) => {
    const { data } = res;
    if (data && data.success) {
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      dispatch({
        type: actions.FETCH_LOG_IN_DONE,
        payload: { user, token }
      });
    } else {
      dispatch({
        type: actions.FETCH_LOG_IN_FAILED,
        payload: {}
      });
    }
  };

  const logIn = doLogIn;

  const logOut = () => {
    saveLSUser(initialState.user);
    saveLSUserToken(initialState.token);
    dispatch({ type: actions.LOG_OUT, payload: {} });
  };

  const onUserMailChange = (newValue) =>
    dispatch({
      type: actions.CHANGE_USER_MAIL,
      payload: {
        value: newValue
      }
    });

  const onUserPassChange = (newValue) =>
    dispatch({
      type: actions.CHANGE_USER_PASS,
      payload: {
        value: newValue
      }
    });

  const userInfoForProvider = {
    user: state.currentUser,
    token: state.token
  };

  return (
    <UserProvider value={userInfoForProvider}>
      {children({
        ...otherProps,
        ...state,
        logInFromStorage,
        logIn,
        logOut,
        onUserMailChange,
        onUserPassChange
      })}
    </UserProvider>
  );
};

export default LogInManager;
