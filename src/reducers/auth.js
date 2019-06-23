import { RESET, LOGIN_USER, LOGOUT_USER, AUTHORIZATION_ERROR } from '../actions/types';

const INITIAL_STATE = {
  error: '',
  message: '',
  authorized: false,
  role: '', // `empleado` or `cliente`
  isEmployee: false,
  isClient: false,
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        error: '',
        message: '',
        authorized: true,
        role: payload.role,
        isEmployee: payload.role === 'empleado',
        isClient: payload.role === 'cliente',
      };

    case LOGOUT_USER:
      return { ...state, authorized: false };

    case AUTHORIZATION_ERROR:
      return { ...state, error: payload };

    case RESET:
      return INITIAL_STATE;
      
    default:
      return state;
  }
};
