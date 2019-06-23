import { RESET, LIST_RECEIPTS } from '../actions/types';

const INITIAL_STATE = {
  receipts: [],
  receipt: {}
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case LIST_RECEIPTS:
      return {
        ...state,
        receipts: payload
      };
    
    case RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};
