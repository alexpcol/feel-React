import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Loading({ animating, color, size, text, style }) {
  return (
    <View style={[styles.component, style]}>
      <ActivityIndicator
        animating={animating}
        size={size}
        color={color}
      />
      {text && <Text>{text}</Text>}
    </View>
  );
}

Loading.ProtoTypes = {
  animating: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object,
};

Loading.defaultProps = {
  animating: true,
  color: '#333333',
  size: 'small',
  text: null,
  style: {},
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center', // around
  },
});
