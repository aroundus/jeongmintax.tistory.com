import * as stylex from '@stylexjs/stylex';

import { size } from '@/styles/size.stylex';

import { PostList } from './PostList';
import type { Content } from './PostListItem';

interface PostListSectionProps {
  contents: Content[];
}

export function PostListSection({ contents }: PostListSectionProps) {
  return (
    <section {...stylex.props(styles.container)}>
      <PostList contents={contents} />
    </section>
  );
}

const styles = stylex.create({
  container: {
    margin: 'auto',
    padding: `${size[24]} 0`,
  },
});
