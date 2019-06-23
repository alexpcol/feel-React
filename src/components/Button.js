import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Colors from './Colors';
import AppGradient from './AppGradient';

const BUTTON_HEIGHT = 50;

class Button extends React.Component {
  static props = {
    // icon: PropTypes.number,
    title: PropTypes.string,
    style: PropTypes.any,
    onPress: PropTypes.func,
  };

  static height = BUTTON_HEIGHT;

  render() {
    const { title, style, onPress } = this.props;

    const content = (
      <AppGradient style={styles.button} imageStyle={{ borderRadius: BUTTON_HEIGHT / 2, resizeMode: 'stretch' }}>
        {/* {iconImage} */}
        <Text
          style={styles.title}
        >
          {title}
        </Text>
      </AppGradient>
    );

    if (onPress) {
      return (
        <TouchableOpacity
          accessibilityTraits="button"
          onPress={onPress}
          activeOpacity={0.5}
          style={[styles.container, style]}
        >
          {content}
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={[styles.container, style]}>
          {content}
        </View>
      );
    }
  }
}

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  container: {
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    borderRadius: BUTTON_HEIGHT / 2,
    backgroundColor: Colors.white,
  },
  buttonRound: {
    width: BUTTON_HEIGHT,
    paddingHorizontal: 0,
  },
  icon: {
    marginRight: 12,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: '#ffffff'
  },
});

export default Button;
