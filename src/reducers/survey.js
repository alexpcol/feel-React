import { QUESTION_ANSWERED, OPTION_SELECTED } from '../actions/types';

const INITIAL_STATE = {
  emotions: [],
  optionsSelected: [],
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case QUESTION_ANSWERED:
      return {
        ...state,
        emotions: state.emotions.concat(payload.response)
      };
    case OPTION_SELECTED:
      return {
        ...state,
        optionsSelected: state.optionsSelected.concat(payload)
      }
    default:
      return state;
  }
};
