import Api from '../services/Api';
import { SEARCH_PLAYLIST, GET_TRACKS, PLAYLIST_SELECTED } from './types';

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

export function playlistSelected(playlist) {
  return dispatch => dispatch({
    type: PLAYLIST_SELECTED,
    payload: playlist
  })
}

export function getTracks(url, token) {
  return async (dispatch) => {
    try {
      const data = await Api.spotify.getTracks(url, token)
      dispatch({ type: GET_TRACKS, payload: data });
    } catch (e) {
      return Api.handleError(AUTHORIZATION_ERROR, dispatch)(e);
    }
  };
}
