export const ACTIONS = {
  UPDATE_EMAIL: 'UPDATE_EMAIL',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD',
  UPDATE_REMEMBER_ME: 'UPDATE_REMEMBER_ME',
};

export const actionCreators = {
  updateEmail: (value) => ({
    type: ACTIONS.UPDATE_EMAIL,
    payload: { value },
  }),
  updatePassword: (value) => ({
    type: ACTIONS.UPDATE_PASSWORD,
    payload: { value },
  }),
  updateRememberMe: (value) => ({
    type: ACTIONS.UPDATE_REMEMBER_ME,
    payload: { value },
  }),
};
