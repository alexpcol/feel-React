import { StyleSheet, Platform, StatusBar } from 'react-native';
import sizeDetector from '../../lib/sizeDetector';

// eslint-disable-next-line no-nested-ternary
const iphoneHeight = sizeDetector.isIphoneX() ? 45 : 20;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? iphoneHeight : StatusBar.currentHeight;

export default StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT
    }
});
