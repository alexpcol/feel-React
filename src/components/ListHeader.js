import React from 'react';
import { Text } from 'react-native';
import StyleSheet from './StyleSheet';
import Colors from './Colors';
import Spacing from './Spacing';

type Props = {
  title: string,
  background?: 'light' | 'medium' | 'dark',
  color?: 'mediumLight' | 'medium' | 'dark' | 'cobalt',
  spacing?: 'tiny' | 'small' | 'base',
};

export default function ListHeader(props: Props) {
  const styles = StyleSheet.create({
    header: {
      paddingHorizontal: Spacing[props.spacing],
      paddingVertical: Spacing.tiny - 2,
      backgroundColor: Colors[`${props.background}Background`],
    },
  });

  const color = props.color !== 'cobalt' ? Colors[`${props.color}Text`] : Colors[props.color];

  return (
    <Text small style={[styles.header, props.style]} fontWeight="bold" color={color}>
      {props.title}
    </Text>
  );
}

ListHeader.defaultProps = {
  background: 'light',
  color: 'cobalt',
  spacing: 'small',
};
