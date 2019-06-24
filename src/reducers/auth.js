import { LOGIN_USER, AUTHORIZATION_ERROR } from '../actions/types';

const INITIAL_STATE = {
  error: '',
  message: '',
  authorized: false,
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        error: '',
        message: '',
        authorized: true,
      };
    case AUTHORIZATION_ERROR:
      return { ...state, error: payload };
      
    default:
      return state;
  }
};
