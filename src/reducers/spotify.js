import { SEARCH_PLAYLIST } from '../actions/types';

const INITIAL_STATE = {
  playlists: []
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case SEARCH_PLAYLIST:
      return {
        ...state,
        playlists: payload
      };
    default:
      return state;
  }
};
