import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
// import Colors from './Colors';

const FormLabel = ({ children }) => <Text children={children} style={StyleSheet.label} />

const FormInput = ({ style, ...props }) => <TextInput {...props} style={[styles.field, style]} />

const FormInputImage = ({ style, icon, error, ...props }) => {
  return (
    <View style={[styles.textInputImageContainer, styles.fieldContainer, error && styles.fieldContainerError, style]}>
      <Image
        source={icon}
        style={styles.icon}
        resizeMode="contain"
      />
      <TextInput {...props} style={styles.field} />
    </View>
  );
}

const FormValidationMessage = ({ children }) => <Text children={children} style={StyleSheet.label} />

const styles = StyleSheet.create({
  textInputImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 23,
    height: 23,
    marginRight: 20,
  },
  label: {
    fontSize: 14
  },
  fieldContainer: {
    color: '#000000',
    borderRadius: 99,
    height: 50,
    borderColor: '#C2C1C1',
    borderWidth: 1,
    paddingHorizontal: 18,
    fontSize: 18
  },
  fieldContainerError: {
    borderColor: 'red',
  },
  field: {
    flex: 2,
    fontSize: 18
  }
});

export {
  FormLabel,
  FormInput,
  FormValidationMessage,
  FormInputImage,
}
