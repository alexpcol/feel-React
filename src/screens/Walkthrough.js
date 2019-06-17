import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AppContainer } from '../components/common';
import { colors } from '../styles/colors'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Walkthrough extends Component {
  render() {
    return (
      <AppContainer
      containerBackgroundColor={colors.purple}
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React je!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
      </AppContainer>
      
    );
  }
}

export default Walkthrough;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});