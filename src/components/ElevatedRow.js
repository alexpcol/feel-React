import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

export default ({ title, style, textStyle, color, icon, ...props }) => (
  <TouchableOpacity
    style={[styles.submitButtonStyle, style]}
    activeOpacity={0.5}
    {...props}
  >
    <Text style={[styles.buttonTextStyle, textStyle]} size={22} color={color}>
      {title}
    </Text>
    <Image style={styles.icon} source={icon || require('../../assets/icons/arightCP.png')} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  submitButtonStyle: {
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 20,
    paddingEnd: 15,
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowColor: 'rgba(2, 41, 106, 0.12)', // IOS
    shadowOffset: { height: 4, width: 0 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 9, // IOS
    elevation: 4, // Android
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
  },

  buttonTextStyle: {
    flex: 9,
  },
  icon: {
    maxHeight: 42,
    maxWidth: 42,
  },
});
