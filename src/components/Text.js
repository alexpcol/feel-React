import React from 'react';
import { Text as RNText } from 'react-native';
import Fonts from './Fonts';

export default (props) => {
  const {
    style,
    size,
    align,
    color,
    light,
    regular,
    bold,
    italic,
    primary,
    secondary,
    secondaryItalic,
    ...rest
  } = props;
  const defaultStyles = { fontFamily: Fonts.DEFAULT_FONT };
  if (size) defaultStyles.fontSize = size;
  if (align) defaultStyles.textAlign = align;
  if (color) defaultStyles.color = color;

  return (
    <RNText
      {...rest}
      pointerEvents="none"
      style={[
        style,
        defaultStyles,
        light && Fonts.light,
        regular && Fonts.regular,
        bold && Fonts.bold,
        italic && Fonts.italic,
        primary && Fonts.primary,
        secondary && Fonts.secondary,
        secondaryItalic && Fonts.secondaryItalic,
      ]}
    />
  );
};
