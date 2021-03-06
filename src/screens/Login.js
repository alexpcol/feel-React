import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import RealmManager from '../services/realm/realm'
import { shouldShowWalktrough } from '../actions/app'
import { authorizeUser } from '../actions/auth'
import { AppContainer, Spinner } from '../components/common';
import { colors } from '../styles/colors';

class Login extends Component {
  state = {
    isLoading: false,
    fadeAnim: new Animated.Value(0),
  }
  componentWillMount() {
    this.props.shouldShowWalktrough()
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
        easing: Easing.back(),
      }
    ).start()
  }

  beginApp = () => () => {
    this.setState({
      isLoading: true
    })
    this.props.authorizeUser()
  };

  renderButton = () => {
    if (this.state.isLoading) {
      return (
        <Spinner color={colors.gray} />
      )
    }
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={this.beginApp()}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.showWalkthrough) {
      this.props.navigation.navigate('Walkthrough');
    }
    if (nextProps.isAuthorized) {
      this.props.navigation.navigate('Survey');
    }
  }

  render() {
    let { fadeAnim } = this.state
    return (
      <AppContainer
        navigation={this.props.navigation}
        linearGradient={true}
        gradientColors={[colors.alabasterWhite, colors.linkWater]}
        barStyle="dark-content"
      >
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
          <Text style={styles.title}>Welcome to Feel</Text>
          <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
            <Image
              source={require('../../assets/logo.png')}
              resizeMode='contain'
              style={{
                width: 400,
                height: 250,
                alignSelf: 'center'
              }}
            />
            {this.renderButton()}
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.footerTitle}>When ever you need It... We'll be there</Text>
          </View>
        </Animated.View>
      </AppContainer>

    );
  }
}

function mapStateToProps(state) {
  return {
    showWalkthrough: state.app.showWalkthrough,
    isAuthorized: state.auth.authorized
  };
}
export default connect(mapStateToProps, {
  shouldShowWalktrough,
  authorizeUser
})(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.gray,
    fontWeight: 'bold',
    fontSize: 40,
  },
  buttonStyle: {
    width: 150,
    height: 40,
    backgroundColor: colors.alabasterWhite,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    marginTop: 30
  },
  buttonText: {
    color: colors.gray,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '800',
  },
  footerTitle: {
    color: colors.gray,
    fontWeight: '200',
    fontSize: 20
  }
});

