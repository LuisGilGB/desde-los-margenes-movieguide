import { ACTIONS } from './actions';

export const initialState = {
  email: '',
  password: '',
  rememberMe: false,
};

const reducer = (state, { type, payload }) => {
  const reducers = {
    [ACTIONS.UPDATE_EMAIL]: () => ({
      ...state,
      email: payload.value,
    }),
    [ACTIONS.UPDATE_PASSWORD]: () => ({
      ...state,
      password: payload.value,
    }),
    [ACTIONS.UPDATE_REMEMBER_ME]: () => ({
      ...state,
      rememberMe: payload.value,
    }),
  };

  return reducers[type] ? reducers[type]() : state;
};

export default reducer;
