// import { Sentry } from 'react-native-sentry';
import React from 'react';
import { Provider } from 'react-redux';
import createReduxStore from './config/store';
import Navigation from './navigation';

const store = createReduxStore();

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
