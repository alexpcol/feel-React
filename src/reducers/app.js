import {
  RESET,
  SET_CONNECTION_STATUS,
  LOADING,
  NETWORK_ERROR,
  REQUEST_ERROR,
  SHOW_WALKTHROUGH,
} from '../actions/types';

const INITIAL_STATE = {
  isConnected: true,
  loading: false,
  showWalkthrough: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CONNECTION_STATUS: {
      console.log(`CONNECTION ${action.payload ? 'ONLINE' : 'OFFLINE'}`);

      return { ...state, isConnected: action.payload };
    }

    case LOADING: {
      return { ...state, loading: action.payload };
    }

    case SHOW_WALKTHROUGH: {
      return { ...state, showWalkthrough: action.payload}
    }

    case NETWORK_ERROR: {
      return state;
    }

    case REQUEST_ERROR: {
      return state;
    }

    case RESET:
      return INITIAL_STATE;

    default: {
      return state;
    }
  }
}
