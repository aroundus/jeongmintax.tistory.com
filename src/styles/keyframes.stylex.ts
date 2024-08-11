import * as stylex from '@stylexjs/stylex';

export const gradient = stylex.keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
});

export const keyframes = stylex.defineVars({
  gradient,
});
