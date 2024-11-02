import * as stylex from '@stylexjs/stylex';

import type { CoverArticle } from '@/data/article';
import { size } from '@/styles/size.stylex';

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
    paddingLeft: size[12],
    paddingRight: size[12],
  },
});
