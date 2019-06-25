import { SEARCH_PLAYLIST, GET_TRACKS, PLAYLIST_SELECTED } from '../actions/types';

const INITIAL_STATE = {
  playlists: [],
  playlistSelected: null,
  tracks: [],
  
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
        tracks: payload.items
      }
    case PLAYLIST_SELECTED:
      return{
        ...state,
        playlistSelected: payload
      }
    default:
      return state;
  }
};
