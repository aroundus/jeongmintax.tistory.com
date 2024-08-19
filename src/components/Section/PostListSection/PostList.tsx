import * as stylex from '@stylexjs/stylex';

import type { Post } from '@/data/post';

import { PostListItem } from './PostListItem';

interface ListProps {
  posts: Post[];
}

export function PostList({ posts }: ListProps) {
  return (
    <div {...stylex.props(styles.container)}>
      {posts.map((post, index) => (
        <PostListItem
          isLast={posts.length === index + 1}
          key={post.path}
          post={post}
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
