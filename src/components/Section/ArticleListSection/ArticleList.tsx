import * as stylex from '@stylexjs/stylex';

import { ArticleListItem } from './ArticleListItem';
import type { Content } from './ArticleListItem';

interface ListProps {
  contents: Content[];
}

export function ArticleList({ contents }: ListProps) {
  return (
    <div {...stylex.props(styles.container)}>
      {contents.map((content, index) => (
        <ArticleListItem
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
