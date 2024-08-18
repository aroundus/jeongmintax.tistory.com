import * as stylex from '@stylexjs/stylex';

import { getCoverItems } from '@/data/cover';
import { size } from '@/styles/size.stylex';

import { PostList } from './PostList';

export function PostListSection() {
  const coverItems = getCoverItems('LIST');

  return (
    <section {...stylex.props(styles.container)}>
      <PostList posts={coverItems} />
    </section>
  );
}

const styles = stylex.create({
  container: {
    margin: 'auto',
    padding: `${size[24]} 0`,
  },
});
