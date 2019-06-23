import {
  GATHERED,
  GATHERED_ERROR,
} from './types';
import Api from '../services/Api';

/*
 * listHeadCount - List Head Count
 */
export function getGathered() {
  return async (dispatch) => {
    try {
      const data = await Api.gathered.gathered();
      dispatch({
        type: GATHERED,
        payload: data,
      });
      return data;
    } catch (e) {
      Api.handleError(GATHERED_ERROR, dispatch);
    }
  };
}
