import * as stylex from '@stylexjs/stylex';

import { getCoverItems } from '@/data/cover';
import { size } from '@/styles/size.stylex';
import { viewport } from '@/styles/viewport.stylex';

export function ListSection() {
  const coverItems = getCoverItems('LIST');

  return <section {...stylex.props(styles.container)}>{JSON.stringify(coverItems)}</section>;
}

const styles = stylex.create({
  container: {
    margin: 'auto',
    maxWidth: viewport.contentWidth,
    padding: size[24],
  },
});
