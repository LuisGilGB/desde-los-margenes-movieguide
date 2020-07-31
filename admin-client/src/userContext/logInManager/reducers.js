import { actions } from './actions';

export const initialState = {
  isLoggedIn: false,
  logInIsFetching: false,
  userMail: 'test@mail.com',
  userPass: '',
  currentUser: '',
  token: ''
};

export const logInReducer = (state = initialState, action) => {
  const { type, payload = {} } = action;
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
  };

  return reducers[type] ? reducers[type]() : state;
};
