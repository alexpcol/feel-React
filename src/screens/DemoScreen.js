import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import RealmManager from '../services/realm/realm';
import { AppContainer } from '../components/common';
import { colors } from '../styles/colors';

class Login extends Component {

  componentDidMount() {
    RealmManager.update('AppConfig',{
      id:17,
      showWalkthrough: false
    })

    RealmManager.get('AppConfig', (object) => {
      let config = Array.from(object)[0]
      console.log(config.showWalkthrough)
      if (config.showWalkthrough) {
        this.props.navigation.navigate('Walkthrough');
      }
    })
  }

  navigateToDetail = () => {
    this.props.navigation.navigate('Walkthrough');
  };

  render() {
    return (
      <AppContainer
      containerBackgroundColor={colors.cadetBlue}
      headerText="Hello"
      navigation={this.props.navigation}
      >
        <View style={{flex:1, backgroundColor:'red' ,flexDirection:'column', justifyContent:'space-between'}}>
          <Text>Hello</Text>
          <TouchableOpacity onPress={this.navigateToDetail}>
            <Text>Hello</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'green', flexDirection:'row', justifyContent:'space-between'}}>
              <Text>Hello</Text>
              <Text>Hello</Text>
          </View>

        </View>
      </AppContainer>
      
    );
  }
}

export default Login;

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