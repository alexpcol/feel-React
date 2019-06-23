import { RESET, LIST_HEAD_COUNT } from '../actions/types';

const INITIAL_STATE = {
  headCount: [],
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case LIST_HEAD_COUNT:
      return {
        ...state,
        headCount: payload.map(item => ({ x: item.year, y: item.value })),
      };

    case RESET:
      return INITIAL_STATE;
      
    default:
      return state;
  }
};
