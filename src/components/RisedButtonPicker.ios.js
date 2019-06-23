import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
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
      <AppGradient style={styles.button} imageStyle={{ resizeMode: 'stretch' }}>
        <Text
          style={styles.title}
        >
          {title}
        </Text>
        {/* {iconImage} */}
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
  },
  icon: {
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
});

export default Button;
