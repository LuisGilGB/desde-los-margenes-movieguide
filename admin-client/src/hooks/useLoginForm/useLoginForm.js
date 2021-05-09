import { useCallback, useReducer } from 'react';
import { actionCreators } from './actions';
import reducer, { initialState } from './reducer';

const useLoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateEmail = useCallback((value) => {
    dispatch(actionCreators.updateEmail(value));
  }, []);

  const updatePassword = useCallback((value) => {
    dispatch(actionCreators.updatePassword(value));
  }, []);

  const updateRememberMe = useCallback((value) => {
    dispatch(actionCreators.updateRememberMe(value));
  }, []);

  return { ...state, updateEmail, updatePassword, updateRememberMe };
};

export default useLoginForm;
