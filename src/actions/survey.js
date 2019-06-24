import Api from '../services/Api';
import { QUESTION_ANSWERED, OPTION_SELECTED, AUTHORIZATION_ERROR } from './types';

export function answerQuestion(text) {
  return async (dispatch) => {
    try {
      const data = await Api.deepAffect.getEmotion(text)
      dispatch({ type: QUESTION_ANSWERED, payload: data });
    } catch (e) {
      return Api.handleError(AUTHORIZATION_ERROR, dispatch)(e);
    }
  };
}

export function saveOption(key) {
  return (dispatch) => {
    dispatch({ type: OPTION_SELECTED, payload: key });
  };
}
