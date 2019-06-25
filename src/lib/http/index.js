import axios from 'axios';
import qs from 'qs';
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

async function httpRequest(request) {
  const headers = { 'Content-Type': 'application/json', ...request.config.headers };
  let data = { ...request.data };

  /* Config request */
  if (request.config.auth) {
    console.log('[HTTP][Request] Set auth headers');
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    headers['Accept'] = 'application/json';
  }

  /* Make request */
  if (request.config.emotion) {
    console.log('[HTTP][Request] Set emotion headers');
    headers['apiKey'] = request.config.apiKey
  }

  if (request.config.withToken) {
    console.log('[HTTP][Request] Set search headers');
    headers['Authorization'] = `Bearer ${request.config.token}`
  }

  if (request.config.auth) {
    try {
      console.log(`[HTTP][Request] ${request.url}`);
      const dataURL = qs.stringify(request.data);
      let res;
      res = await axios.post(request.url, dataURL, {
        headers,
        auth: {
          username: data.username,
          password: data.password
        }
      });
      console.log('[HTTP][Request] Response:', res.data);
      return res.data;
    } catch (e) {
      console.log('[HTTP][Request] Error response:', e);
      return errorHandler(e);
    }
  } else {
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
