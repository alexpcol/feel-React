import { QUESTION_ANSWERED, OPTION_SELECTED } from '../actions/types';

const INITIAL_STATE = {
  emotions: [],
  optionsSelected: [],
  gotEmotion: false
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case QUESTION_ANSWERED:
      return {
        ...state,
        emotions: state.emotions.concat(payload.response),
        gotEmotion: true
      };
    case OPTION_SELECTED:
      return {
        ...state,
        optionsSelected: state.optionsSelected.concat(payload),
        gotEmotion: false
      }
    default:
      return state;
  }
};
