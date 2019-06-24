import { LOGIN_USER, AUTHORIZATION_ERROR } from '../actions/types';

const INITIAL_STATE = {
  error: '',
  message: '',
  authorized: false,
  token: ''
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        error: '',
        message: '',
        authorized: true,
        token: payload.access_token
      };
    case AUTHORIZATION_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
