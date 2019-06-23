import React, { Component } from 'react';
import { WebView } from 'react-native';

class Register extends Component {
  static navigationOptions = {
    title: 'Register',
  };

  render() {
    return (
      <WebView
        source={{ uri: 'https://github.com/facebook/react-native' }}
        scrollEnabled
      />
    );
  }
}

export default Register;
