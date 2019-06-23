import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, FormInputImage } from './Form';

import Color from './Colors';

export default function (props) {
  const { label, input: { value, onChange }, meta: { touched, error, warning }, ...inputProps } = props;

  return (
    <View>
      {/* <FormLabel>{label}</FormLabel> */}
      <FormInputImage
        {...inputProps}
        value={value}
        onChangeText={onChange}
        placeholderTextColor={Color.gray}
        error={touched && error}
      />
      {/* {touched && (
        (error && <FormValidationMessage>{error}</FormValidationMessage>)
        ||
        (warning && <FormValidationMessage>{warning}</FormValidationMessage>)
      )} */}
    </View>
  );
}
