import React from 'react';
import { ImageBackground } from 'react-native';

export default ({ style = { width: '100%', height: '100%'}, ...props }) => (
  <ImageBackground
    style={style}
    source={require('../../assets/gradient.jpg')}
    imageStyle={{ resizeMode: 'stretch' }}
    {...props}
  />
)
