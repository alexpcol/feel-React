import { QUESTION_ANSWERED } from '../actions/types';

const INITIAL_STATE = {
  emotions: []
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case QUESTION_ANSWERED:
      const emotion = payload.response
      state.emotions.push(emotion)
      return {
        ...state,
      };
    default:
      return state;
  }
};
