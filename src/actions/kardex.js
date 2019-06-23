import {
  LIST_KARDEX,
  LIST_KARDEX_ERROR,
  LIST_CLIENT_KARDEX,
  LIST_CLIENT_KARDEX_ERROR,
} from './types';
import Api from '../services/Api';

/*
 * listKardex - List kardex dates.
 */
export function listKardex() {
  return async (dispatch) => {
    try {
      const data = await Api.kardex.listKardex();
      dispatch({
        type: LIST_KARDEX,
        payload: data,
      });
      return data;
    } catch (e) {
      Api.handleError(LIST_KARDEX_ERROR, dispatch);
    }
  };
}

/*
 * listClientKardex - List client kardex sum.
 */
export function listClientKardex(year, month) {
  return async (dispatch) => {
    try {
      const data = await Api.kardex.listClientKardex(year, month);
      dispatch({
        type: LIST_CLIENT_KARDEX,
        payload: data,
      });
      return data;
    } catch (e) {
      Api.handleError(LIST_CLIENT_KARDEX_ERROR, dispatch);
    }
  };
}
