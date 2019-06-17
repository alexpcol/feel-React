/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux'
import Navigation from './navigation/navigation';
import store from './config/store';

export default class App extends Component {
  render() {
    return(
      <Provider store ={store}>
          <Navigation/>
      </Provider>
    )
  }
}
