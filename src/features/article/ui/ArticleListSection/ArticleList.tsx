import * as stylex from '@stylexjs/stylex';

import type { CoverArticle } from '@/entities/article/api';
import { sizes } from '@/shared/stylex/sizes.stylex';

import { ArticleListItem } from './ArticleListItem';

interface ListProps {
  articles: CoverArticle[];
}

export function ArticleList({ articles }: ListProps) {
  return (
    <div {...stylex.props(styles.container)}>
      {articles.map((article, index) => (
        <ArticleListItem
          {...article}
          isLast={articles.length === index + 1}
          key={article.path}
        />
      ))}
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: sizes[12],
    paddingRight: sizes[12],
  },
});
