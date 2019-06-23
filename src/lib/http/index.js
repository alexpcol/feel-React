import axios from 'axios';
import qs from 'qs';
import { getAuthorizationToken } from '../auth';
import ConnectionHandler from '../../services/ConnectionHandler';
import _Error from './Error';

/*
 * Error handler
 *
 * @param {error} error - Error
 */
function errorHandler(err) {
  if (err.response) {
    switch (err.response.data.error.type) {
      case 'api_error': {
        throw new _Error('serverError', { type: 'APIError' });
      }

      case 'authentication_error': {
        throw new _Error('Auth', { type: 'AuthenticationError' });
      }

      case 'AUTHENTICATION_ERROR': {
        throw new _Error('Credenciales inválidas', { type: 'InvalidRequestError' });
      }

      case 'invalid_request_error': {
        throw new _Error('RequestError', { type: 'InvalidRequestError' });
      }

      case 'validation_error': {
        throw new _Error('ValidationError', { type: 'InvalidRequestError' });
      }

      default: {
        throw new _Error(err.message);
      }
    }
  } else if (err.request) {
    throw new _Error('ConnectionError', { type: 'ConnectionError' });
  } else {
    throw new _Error(err.message);
  }
}


/**
 * HTTP Request
 *
 * @param {object} request - Request config
 * @param {string} request.method - HTTP Method
 * @param {string} request.url
 * @param {object} request.data - Optional data
 * @param {object} request.config - Request config
 * @param {boolean} request.config.form - If request must use form format -> Content-Type header
 * @param {string} [request.config.auth] - Request auth config -> Authorization header
 * @param {object} [request.config.headers] - Request headers
 */
async function httpRequest(request) {
  const headers = { 'Content-Type': 'application/json', ...request.config.headers };
  let data = { ...request.data };

  if (!ConnectionHandler.isConnected) throw new _Error('Offline', { type: 'NetworkError' });

  /* Config request */
  if (request.config.form) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    data = qs.stringify(request.data);
  }

  /* Make request */
  if (!request.config.auth) {
    console.log('[HTTP][Request] Set auth headers');
    headers.Authorization = await getAuthorizationToken();
  }

  try {
    console.log(`[HTTP][Request] ${request.url}`);
    let res;
    if (request.method === 'get') {
      res = await axios.get(request.url, {
        headers,
        ...request.config,
      });
    } else {
      res = await axios[request.method](request.url, data, {
        headers,
        ...request.config,
      });
    }

    console.log('[HTTP][Request] Response:', res.data);
    return res.data;
  } catch (e) {
    console.log('[HTTP][Request] Error response:', e);
    return errorHandler(e);
  }
}

function post(url, data, config = {}) {
  return httpRequest({ method: 'post', url, data, config });
}

function get(url, config = {}) {
  return httpRequest({ method: 'get', url, config });
}

function put(url, data, config = {}) {
  return httpRequest({ method: 'put', url, data, config });
}

function del(url, config = {}) {
  return httpRequest({ method: 'delete', url, config });
}

export default {
  post,
  get,
  put,
  del,
};
