import { SEARCH_PLAYLIST, GET_TRACKS, PLAYLIST_SELECTED } from '../actions/types';

const INITIAL_STATE = {
  playlists: [],
  playlistSelected: null,
  tracks: [],
  gotTracks: false,

};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case SEARCH_PLAYLIST:
      return {
        ...state,
        playlists: payload.playlists.items
      };
    case GET_TRACKS:
      return {
        ...state,
        tracks: payload.items,
        gotTracks: true
      }
    case PLAYLIST_SELECTED:
      return {
        ...state,
        playlistSelected: payload,
        gotTracks: false
      }
    default:
      return state;
  }
};
