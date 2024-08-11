import * as stylex from '@stylexjs/stylex';

import { color } from './color.stylex';

export const darkTheme = stylex.createTheme(color, {
  primary: color.yellow,
  secondary: '',
});

export const lightTheme = stylex.createTheme(color, {
  primary: color.green,
  secondary: '',
});
