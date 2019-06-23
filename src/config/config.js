// import { RNConfig } from 'NativeModules';
// import { Constants } from 'expo';
//Constants.manifest.releaseChannel
const environment = 'production'
const simulator = true;

const get = (conf, env) => prop => prop
  .replace('[', ':')
  .replace(']', '')
  .split(':')
  .reduce(
    (obj, property) => obj[property],
    env ? conf[environment] : conf,
  );

const envConf = {
  development: {
    app: {
      secretKey: 'CUSTOM_SECRET_KEY',
      apiHost: simulator ? 'link-dev.api.ironbit.net' : 'link-dev.api.ironbit.net',
      apiProtocol: 'http',
    },
  },
  staging: {
    app: {
      secretKey: 'CUSTOM_SECRET_KEY',
      apiHost: 'api-dev.ironbit.com.mx',
      apiProtocol: 'http',
    },
  },
  production: {
    app: {
      apiHost: 'capital24.mx',
      apiProtocol: 'https',
    },
  },
};

envConf.get = get(envConf, true);


const config = {
  app: {
    locale: 'en-US',
    application: 'Capital People',
    environment,
    secretKey: 'CUSTOM_SECRET_KEY',

    apiHost: envConf.get('app:apiHost'),
    apiProtocol: envConf.get('app:apiProtocol'),

    apiVersion: 'api/v1',
    timeout: 15000,
  },
};

config.get = get(config);

module.exports = config;
