import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Constants } from 'expo';
import AppGradient from './AppGradient';

export const AppSpacing = 32;
export default ({ showBack = false, children, title, background = '#ECE9E9', navigation }) => (
  <View style={[styles.component, { backgroundColor: background }]}>
    <AppGradient style={styles.navbar}>
      {/* <MaterialIcons icon="menu" color="#000000" size={20} onPress={navigation.toggleDrawer} /> */}
      <TouchableOpacity style={styles.iconWrapper} onPress={showBack ? () => navigation.goBack(null) : navigation.toggleDrawer}>
        <Image source={showBack ? require('../../assets/icons/arrowleftcp.png') : require('../../assets/icons/menucp.png')} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
      <Text color="#ffffff" size={22}>{title}</Text>
      <TouchableOpacity style={styles.iconWrapper}>
        {/* <Image source={require('../../assets/icons/menucp.png')} style={styles.icon} resizeMode="contain" /> */}
      </TouchableOpacity>
    </AppGradient>
    {children}
  </View>
);

const styles = StyleSheet.create({
  component: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#ECF2FC',
    // width: '100%', height: '100%'
  },
  navbar: {
    display: 'flex',
    paddingTop: Constants.statusBarHeight,
    height: Constants.statusBarHeight + 44,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 11,
  },
  title: {
    fontSize: 18,
  },
  iconWrapper: {
    width: 30,
    height: 24,
  },
  icon: {
    marginTop: 1,
    width: 18,
    height: 18,
  },
});
