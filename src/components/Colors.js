const NAMED_COLORS = {
  // grayscale (light to dark)
  white: 'rgba(255, 255, 255, 1)',
  white50Opacity: 'rgba(255,255,255,0.5)',
  lightGray: 'rgba(193, 198, 213, 0)',
  gray: 'rgb(139, 139, 139)',
  black: 'rgba(27, 28, 31, 1)',

  lightblue: 'rgba(236, 242, 252, 0)',
  blue: 'rgb(165, 200, 241)',
  darkblue: 'rgb(74, 144, 226)',
  cobalt: 'rgba(4, 74, 181, 1)',
};

const THEME_COLORS = {
  // pass through for use with colorWithAlpha
  ...NAMED_COLORS,

  // alias the named colors by use-case
  // lightBackground: NAMED_COLORS.white,
  // mediumBackground: NAMED_COLORS.lightGray,
  // darkBackground: NAMED_COLORS.gray,

  // lightText: NAMED_COLORS.white,
  // mediumLightText: NAMED_COLORS.gray,
  // mediumText: NAMED_COLORS.darkGray,
  // darkText: NAMED_COLORS.black,

  cellBorder: NAMED_COLORS.lightGray,
  underlayColor: 'rgba(242, 242, 242, 1)',

  alpha: 0.15,
  transparent: 'transparent', // 'rgba(0, 0, 0, 0)',
};

/* Exports
============================================================================= */

module.exports = {
  ...THEME_COLORS,

  colorWithAlpha(name: ?string = 'blue', opacity: number = 1) {
    if (!THEME_COLORS[name]) {
      name = 'blue';
    }
    return THEME_COLORS[name].split(', 1)').join(`, ${opacity})`);
  },

  colorForTopic(count: number, index: number): string {
    const hue = Math.round((360 * index) / (count + 1));
    return `hsl(${hue}, 74%, 65%)`;
  },

  underlayForColor(name: ?string = 'blue') {
    if (!THEME_COLORS[name]) name = 'blue';
    return `rgba(${THEME_COLORS[name]
      .replace('rgba(', '').replace(', 1)', '').replace(' ', '')
      .split(',')
      .map(v => Number(v) - 8)
      .join(', ')}, 1)`;
  },
};
