import Api from '../services/Api';
import { storeCredentials, destroyCredentials } from '../lib/auth';
import { RESET, LOGIN_USER, AUTHORIZATION_ERROR, RETRIEVE_USER, LOGOUT_USER } from './types';

export function authorizeUserWithBiometrics() {
  return (dispatch) => {
//     Auth.hasPreviousSession().then((session) => {
//       if (session) {
//         console.log('hasPreviousSession', session);
//         Auth.authenticateUserWithBiometrics() // refreshAccessToken
//           .then(() => {
//             console.log('refreshing token with token', session.refreshToken);
//             Api.refreshAccessToken(session.refreshToken)
//               .then(data => Auth.updateCredentials(data)
//                 .then(() => dispatch({ type: LOGIN_USER }))
//                 .catch(() => dispatch({ type: AUTHORIZATION_ERROR })))
//
//               .catch(Api.handleError(AUTHORIZATION_ERROR, dispatch));
//           })
//           .catch((e) => {
//             /* handle error https://github.com/naoufal/react-native-touch-id#errors */
//             console.log('authenticateUserWithBiometrics ERROR', e);
//           });
//       }
//     });
  };
}

export function authorizeUser({ username, password }) {
  return async (dispatch) => {
    try {
      const data = await Api.auth.getAccessToken(username, password);
      await storeCredentials(data);
      dispatch({ type: LOGIN_USER, payload: data });
    } catch (e) {
      return Api.handleError(AUTHORIZATION_ERROR, dispatch)(e);
    }
  };
}

export function logoutUser() {
  return async (dispatch) => {
    console.log('[auth] logoutUser');
    try {
      await destroyCredentials()
      console.log('[auth] logoutUser: credentials destroyed');
      dispatch({ type: LOGOUT_USER });
      dispatch({ type: RESET });
    } catch (e) {
      console.error('An error occured while trying to destroy session', e)
    }
  }
}
