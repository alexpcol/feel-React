import Api from '../services/Api';
import { LOGIN_USER, AUTHORIZATION_ERROR } from './types';
import RealmManager from '../services/realm/realm'

export function authorizeUser() {
  return async (dispatch) => {
    try {
      const data = await Api.auth.getAccessToken();
      RealmManager.update('Session',{
        id:17,
        token: data.access_token
      })
      dispatch({ type: LOGIN_USER, payload: data });
    } catch (e) {
      return Api.handleError(AUTHORIZATION_ERROR, dispatch)(e);
    }
  };
}
