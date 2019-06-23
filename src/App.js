// import { Sentry } from 'react-native-sentry';
import React from 'react';
import { Provider } from 'react-redux';
import createReduxStore from './config/store';
import { SET_CONNECTION_STATUS } from './actions/types';
import ConnectionHandler, { handleConnection } from './services/ConnectionHandler';
import Navigation from './navigation';

const store = createReduxStore();

export default class App extends React.Component {
  constructor() {
    super();
  }

  async componentWillMount() {
    await this.configureApp();
  }

  configureApp = async () => {
    ConnectionHandler.configure(handleConnection(store.dispatch, SET_CONNECTION_STATUS));
    ConnectionHandler.addConnectionListener(handleConnection(store.dispatch, SET_CONNECTION_STATUS));

  };

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
