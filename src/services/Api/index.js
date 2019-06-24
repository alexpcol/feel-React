import { SERVER_ERROR, LOGOUT_USER, NETWORK_ERROR, REQUEST_ERROR } from '../../actions/types';
import auth from './auth';
import deepAffect from './deepAffects';
import spotify from './spotify';


function handleError(type, dispatch) {
  return (err) => {
    console.log('axios err handling', { err });
    switch (err.type) {
      case 'AUTHENTICATION_ERROR':
        dispatch({ type: type, payload: err.message })
        break;
      case 'APIError':
        dispatch({ type: SERVER_ERROR });
        break;
      case 'AuthenticationError':
        dispatch({ type: LOGOUT_USER });
        break;
      case 'InvalidRequestError':
        dispatch({ type, payload: err.message });
        break;
      case 'ConnectionError':
        dispatch({ type: REQUEST_ERROR });
        break;
      case 'NetworkError':
        dispatch({ type: NETWORK_ERROR });
        break;
    }
  };
}


export default {
  handleError,
  auth,
  deepAffect,
  spotify
};
