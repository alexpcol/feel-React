import {
  RETRIEVE_USER,
  RETRIEVE_USER_ERROR,
} from './types';
import Api from '../services/Api';

/*
 * getProfile - Retrieve user profile.
 */
export function retrieveUser() {
  return async (dispatch) => {
    try {
      const data = await Api.profile.retrieveUser();
      dispatch({
        type: RETRIEVE_USER,
        payload: data,
      });
      return data;
    } catch(e) {
      Api.handleError(RETRIEVE_USER_ERROR, dispatch);
    }
  };
}
