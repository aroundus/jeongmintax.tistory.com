import * as stylex from '@stylexjs/stylex';

import { colors } from './colors.stylex';

export const darkTheme = stylex.createTheme(colors, {
  primary: colors.yellow,
  primaryAlpha: colors.yellowAlpha,
  secondary: colors.gray,
  secondaryAlpha: colors.grayAlpha,
});

export const lightTheme = stylex.createTheme(colors, {
  primary: colors.green,
  primaryAlpha: colors.greenAlpha,
  secondary: colors.gray,
  secondaryAlpha: colors.grayAlpha,
});
