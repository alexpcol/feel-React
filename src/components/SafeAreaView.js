// From: https://blog.callstack.io/react-native-meets-iphonex-a0f5034f7a41
// See https://mydevice.io/devices/ for device dimensions

import React from 'react';
import { Platform, Dimensions, SafeAreaView } from 'react-native';

const IPHONE_X_WIDTH = 375;
const IPHONE_X_HEIGHT = 812;

export const isIPhoneX = () => {
  const { height: DISPLAY_HEIGHT, width: DISPLAY_WIDTH } = Dimensions.get('window');

  return Platform.OS === 'ios' &&
    ((DISPLAY_HEIGHT === IPHONE_X_HEIGHT && DISPLAY_WIDTH === IPHONE_X_WIDTH) ||
      (DISPLAY_HEIGHT === IPHONE_X_WIDTH && DISPLAY_WIDTH === IPHONE_X_HEIGHT));
};

export default function ({ children }) {
  return isIPhoneX() ? <SafeAreaView>{children}</SafeAreaView> : children;
}
