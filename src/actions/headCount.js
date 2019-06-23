import {
  LIST_HEAD_COUNT,
  LIST_HEAD_COUNT_ERROR,
} from './types';
import Api from '../services/Api';

/*
 * listHeadCount - List Head Count
 */
export function listHeadCount() {
  return async (dispatch) => {
    try {
      const data = await Api.headCount.listHeadCount();
      dispatch({
        type: LIST_HEAD_COUNT,
        payload: data,
      });
      return data;
    } catch(e) {
      Api.handleError(LIST_HEAD_COUNT_ERROR, dispatch);
    }
  };
}
