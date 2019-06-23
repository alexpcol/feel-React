import React, { Component } from 'react';
import { ActivityIndicator, Image, SafeAreaView, View, Dimensions, Text } from 'react-native';
import PropTypes from 'prop-types';
import dismissKeyboard from 'dismissKeyboard';
import { connect } from 'react-redux';
import { authorizeUser, authorizeUserWithBiometrics } from '../../actions/auth';
import StyleSheet from '../../components/StyleSheet';
import Spacing from '../../components/Spacing';


// Components
import Button from '../../components/Button';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

class Login extends Component {
  static navigatorStyle = {
    navBarTransparent: true,
  };

  static propTypes = {
    authorizeUser: PropTypes.func.isRequired,
    authorizeUserWithBiometrics: PropTypes.func.isRequired,
  };

  state = {
    isLoading: false
  }

  componentWillMount() {
    this.props.authorizeUserWithBiometrics();
  }

  handleLogin = values => {
    dismissKeyboard();
    Promise.resolve()
      .then(() => {
        this.setState({ isLoading: true });
      })
      .then(() => {
        this.props.authorizeUser(values);
        // this.props.authorizeUser({
        //   // username: 'cros920313HMCLNS09',
        //   username: 'lore920313HMCLNS09',
        //   password: 'pass2018',
        // });
      })
      .then(() => {
        this.setState({
          isLoading: false
        });
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.component}>
          <Image
            source={require('../../../assets/logo/logo.png')}
            resizeMode="contain"
            style={{
              width: 130,
              height: 140,
              alignSelf: 'center'
            }}
          />

          <Text color="red" size={18} align="center">{this.props.errorMessage}</Text>

          {this.state.isLoading ? (
            <ActivityIndicator size="large" color="#094077" style={{ marginTop: 60 }} />
          ) : (
              <Button
                title="Ingresar"
                style={{ marginTop: 60 }}
              />
            )}

          <Text
            style={styles.hint}
            size={14}
            color={'#ffffff'}
            align="center"
          >
            Recuerda que tu usuario es tu número de CURP
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  component: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: Spacing.base,
    paddingTop: 40,
  },
  hint: {
    position: 'absolute',
    bottom: 0,
    right: 25,
    left: 25
  },
});

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
  };
}

export default connect(mapStateToProps, {
  authorizeUser,
  authorizeUserWithBiometrics,
})(Login);
