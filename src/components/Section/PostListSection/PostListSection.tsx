import * as stylex from '@stylexjs/stylex';

import { getPosts } from '@/data/post';
import { size } from '@/styles/size.stylex';

import { PostList } from './PostList';

export function PostListSection() {
  const posts = getPosts('LIST');

  return (
    <section {...stylex.props(styles.container)}>
      <PostList posts={posts} />
    </section>
  );
}

const styles = stylex.create({
  container: {
    margin: 'auto',
    padding: `${size[24]} 0`,
  },
});
