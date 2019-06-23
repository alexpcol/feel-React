import { SET_CONNECTION_STATUS, LOADING } from './types';

/*
 * App Global Actions
 */

// Handle Connection Status
export function connectionState(isConnected) {
  return dispatch => dispatch({
    type: SET_CONNECTION_STATUS,
    payload: isConnected,
  });
}

// Handle Loading Screen (Activity Indicator)
export function showLoadingScreen() {
  return dispatch => dispatch({
    type: LOADING,
    payload: true,
  });
}

// Handle Loading Screen (Activity Indicator)
export function hideLoadingScreen() {
  return dispatch => dispatch({
    type: LOADING,
    payload: false,
  });
}
