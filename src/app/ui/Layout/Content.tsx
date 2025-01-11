import React from 'react';
import * as stylex from '@stylexjs/stylex';

interface ContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return <main {...stylex.props(styles.container)}>{children}</main>;
}

const styles = stylex.create({
  container: {
    margin: 'auto',
  },
});
