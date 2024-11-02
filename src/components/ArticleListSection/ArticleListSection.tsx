import * as stylex from '@stylexjs/stylex';

import type { CoverArticle } from '@/data/article';

import { ArticleList } from './ArticleList';

interface ArticleListSectionProps {
  articles: CoverArticle[];
}

export function ArticleListSection({ articles }: ArticleListSectionProps) {
  return (
    <section {...stylex.props(styles.container)}>
      <ArticleList articles={articles} />
    </section>
  );
}

const styles = stylex.create({
  container: {
    margin: 'auto',
  },
});
