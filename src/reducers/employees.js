import {
  RESET,
  LIST_EMPLOYEES
} from '../actions/types';

const INITIAL_STATE = {
  employees: [],
  employee: {}
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case LIST_EMPLOYEES:
      return {
        ...state,
        employees: state.employees.concat(payload.results),
      };
    
    case RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};
