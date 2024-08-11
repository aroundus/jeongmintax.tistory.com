import * as stylex from '@stylexjs/stylex';

import { size } from './size.stylex';

type NumericKeysOnly<T> = {
  [K in keyof T]: K extends number ? K : never;
}[keyof T];

export const mixinStyles = stylex.create({
  absoluteCenter: (position?: { left?: number | string; top?: number | string }) => ({
    left: position?.left || '50%',
    position: 'absolute',
    top: position?.top || '50%',
    transform: 'translate(-50%, -50%)',
  }),
  font: (value: NumericKeysOnly<typeof size>, weight?: number) => ({
    fontSize: `${size[value]}`,
    fontWeight: weight || 400, // eslint-disable-line
    lineHeight: value < 30 ? 1.5 : 1.35,
  }),
  hideScrollbar: (axis: 'x' | 'y') => ({
    overflowX: axis === 'x' ? 'auto' : '', // eslint-disable-line
    overflowY: axis === 'y' ? 'auto' : '', // eslint-disable-line
    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  }),
});
