import { Platform, Dimensions } from 'react-native';

const DEVICE_SCALE = Dimensions.get('window').width / 375;

const DEFAULT_FONT = 'UniversCondensed';
const FUTURA = 'FuturaMedium';
const FUTURA_ITALIC = 'FuturaMediumItalic';

/* utils ==================================================================== */

// get font name and weight
function fontWeight(family = DEFAULT_FONT, weight = 'regular') {
  return family;
}

function normalize(size: number): number {
  return Math.round(DEVICE_SCALE * size);
}

// attempt to normalize x-platform line heights
function lineHeight(val = 1, scale = 1, normalized = true) {
  const adjusted = normalized ? normalize(val) : val;
  return Math.round(Platform.OS === 'android' ? adjusted * scale : adjusted);
}

export default {
  primary: {
    fontFamily: DEFAULT_FONT,
  },
  secondary: {
    fontFamily: FUTURA,
  },
  secondaryItalic: {
    fontFamily: FUTURA_ITALIC,
  },
  light: {
    fontFamily: DEFAULT_FONT,
    // fontWeight: '300',
  },
  regular: {
    fontFamily: DEFAULT_FONT,
    // fontWeight: '400',
  },
  bold: {
    fontFamily: DEFAULT_FONT,
    // fontWeight: '400',
  },
  italic: {
    fontFamily: FUTURA_ITALIC,
  },

  h1: {
    fontFamily: DEFAULT_FONT,
    fontWeight: '400',
  },
  h2: {
    fontFamily: DEFAULT_FONT,
    fontWeight: '400',
  },
  h3: {
    fontFamily: DEFAULT_FONT,
    fontWeight: '400',
  },
  h4: {
    fontFamily: DEFAULT_FONT,
    fontWeight: '700',
  },
  h5: {
    fontFamily: DEFAULT_FONT,
    fontWeight: '700',
  },
  p: {
    fontFamily: DEFAULT_FONT,
    fontWeight: '400',
  },
  small: {
    fontFamily: DEFAULT_FONT,
    fontWeight: '300',
  },

  fontWeight,
  lineHeight,
  normalize,
  DEFAULT_FONT,
  FUTURA,
  FUTURA_ITALIC,
};
