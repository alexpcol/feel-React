import { SET_CONNECTION_STATUS, LOADING, SHOW_WALKTHROUGH } from './types';
import RealmManager from '../services/realm/realm'
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

//Handle Show Walktrough 
export function shouldShowWalktrough() {
  return dispatch => {
    RealmManager.get('AppConfig', (object) => {
      let config = Array.from(object)[0]
      console.log(config.showWalkthrough)
      dispatch({
        type: SHOW_WALKTHROUGH,
        payload: config.showWalkthrough
      })
    })
  }
}

//Handle Walktrough seen 
export function walktroughSeen() {
  return dispatch => {
    RealmManager.update('AppConfig',{
      id:17,
      showWalkthrough: false
    })
    RealmManager.get('AppConfig', (object) => {
      let config = Array.from(object)[0]
      console.log(config.showWalkthrough)
      dispatch({
        type: SHOW_WALKTHROUGH,
        payload: config.showWalkthrough
      })
    })
  }
}
