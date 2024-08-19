import * as stylex from '@stylexjs/stylex';

import { PostListItem } from './PostListItem';
import type { Content } from './PostListItem';

interface ListProps {
  contents: Content[];
}

export function PostList({ contents }: ListProps) {
  return (
    <div {...stylex.props(styles.container)}>
      {contents.map((content, index) => (
        <PostListItem
          {...content}
          isLast={contents.length === index + 1}
          key={content.path}
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
