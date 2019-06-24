import Api from '../services/Api';
import { SEARCH_PLAYLIST } from './types';

export function searchPlaylist(text, token) {
  return async (dispatch) => {
    try {
      const data = await Api.spotify.searchPlaylist(text, token)
      dispatch({ type: SEARCH_PLAYLIST, payload: data });
    } catch (e) {
      return Api.handleError(AUTHORIZATION_ERROR, dispatch)(e);
    }
  };
}
