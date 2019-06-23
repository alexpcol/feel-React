import React from 'react';
import { View } from 'react-native';

const SPACING = {
  tiny: 8,
  small: 16,
  base: 24,
  large: 48,
  xLarge: 64,
};

export function Wrapper({ style, children, tiny, small, large, xLarge, ...props }) {
  return (
    <View
      style={[
        style,
        { padding: SPACING.base }, // base -> default
        tiny && { padding: SPACING.tiny },
        small && { padding: SPACING.small },
        large && { padding: SPACING.large },
        xLarge && { padding: SPACING.xLarge },
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

export default SPACING;
