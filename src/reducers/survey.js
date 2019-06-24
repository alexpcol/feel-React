import { QUESTION_ANSWERED } from '../actions/types';

const INITIAL_STATE = {
  emotions: []
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case QUESTION_ANSWERED:
      return {
        ...state,
        emotions: state.emotions.concat(payload.response)
      };
    default:
      return state;
  }
};
