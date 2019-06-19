import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AppContainer } from '../components/common';
import { colors } from '../styles/colors'
import LinearGradient from 'react-native-linear-gradient';

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
      containerBackgroundColor={colors.cadetBlue}
      headerText="Hello"
      >
        <View style={{flex:1, backgroundColor:'red' ,flexDirection:'column', justifyContent:'space-between'}}>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <View style={{backgroundColor:'green', flexDirection:'row', justifyContent:'space-between'}}>
              <Text>Hello</Text>
              <Text>Hello</Text>
          </View>

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
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});