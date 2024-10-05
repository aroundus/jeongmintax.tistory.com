import * as stylex from '@stylexjs/stylex';

import { ArticleList } from './ArticleList';
import type { ArticleListItemContent } from './types';

interface ArticleListSectionProps {
  contents: ArticleListItemContent[];
}

export function ArticleListSection({ contents }: ArticleListSectionProps) {
  return (
    <section {...stylex.props(styles.container)}>
      <ArticleList contents={contents} />
    </section>
  );
}

const styles = stylex.create({
  container: {
    margin: 'auto',
  },
});
