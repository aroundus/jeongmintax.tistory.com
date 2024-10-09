import * as stylex from '@stylexjs/stylex';

import { color } from './color.stylex';

export const darkTheme = stylex.createTheme(color, {
  primary: color.yellow,
  primaryAlpha: color.yellowAlpha,
  secondary: color.gray,
  secondaryAlpha: color.grayAlpha,
});

export const lightTheme = stylex.createTheme(color, {
  primary: color.green,
  primaryAlpha: color.greenAlpha,
  secondary: color.gray,
  secondaryAlpha: color.grayAlpha,
});
