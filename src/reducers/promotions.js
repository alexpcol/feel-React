import { RESET, LIST_PROMOTIONS } from '../actions/types';

const INITIAL_STATE = {
  promotions: null,
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case LIST_PROMOTIONS:
      return {
        ...state,
        promotions: payload,
      };

    case RESET:
      return INITIAL_STATE;
      
    default:
      return state;
  }
};
