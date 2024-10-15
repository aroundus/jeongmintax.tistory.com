import * as stylex from '@stylexjs/stylex';
import { colors } from '@stylexjs/open-props/lib/colors.stylex';

export const color = stylex.defineVars({
  primary: '#94b080',
  primaryAlpha: '#94b080aa',
  secondary: '#aaa59b',
  secondaryAlpha: '#aaa59baa',

  black: colors.gray9,
  gray: '#aaa59b',
  grayAlpha: '#aaa59baa',
  green: '#94b080', // [PANTONE] Asparagus
  greenAlpha: '#94b080aa',
  yellow: '#e1d160', // [PANTONE] Dandelion
  yellowAlpha: '#e1d160aa', // [PANTONE] Dandelion
});
