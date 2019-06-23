import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import AppGradient from './AppGradient';

export default ({ title, subtitle, onPress }) => (
  <View>
  <TouchableOpacity style={styles.component} onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text secondaryItalic style={styles.subtitle}>{subtitle}</Text>
    </View>
    <Image style={styles.icon} source={require('../../assets/icons/arightCP.png')} />
  </TouchableOpacity>
  <AppGradient style={styles.divider} />
  </View>
);

const styles = StyleSheet.create({
  component: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#000000',
    fontSize: 23,
    marginBottom: 3,
  },
  subtitle: {
    color: '#C1C6D5',
    fontSize: 19,
  },
  icon: {
    maxHeight: 26,
    maxWidth: 26,
  },
  divider: {
    height: 0.5,
  },
});
