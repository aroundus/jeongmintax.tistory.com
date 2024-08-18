import * as stylex from '@stylexjs/stylex';

import type { CoverItem } from '@/data/cover';

import { PostListItem } from './PostListItem';

interface ListProps {
  posts: CoverItem[];
}

export function PostList({ posts }: ListProps) {
  return (
    <div {...stylex.props(styles.container)}>
      {posts.map((post, index) => (
        <PostListItem
          {...post}
          isLast={posts.length === index + 1}
          key={post.path}
        />
      ))}
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});
