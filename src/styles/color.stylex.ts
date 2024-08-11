import * as stylex from '@stylexjs/stylex';
import { colors } from '@stylexjs/open-props/lib/colors.stylex';

export const color = stylex.defineVars({
  primary: '',
  secondary: '',

  black: colors.gray9,
  gray: '#aaa59b',
  green: '#94b080', // [PANTONE] Asparagus
  yellow: '#e1d160', // [PANTONE] Dandelion
});
