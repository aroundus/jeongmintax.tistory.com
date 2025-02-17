import * as stylex from '@stylexjs/stylex';

import { viewports } from '@/shared/stylex/viewports.stylex';

import type { Article } from '../../api';

import { ArticleList } from './ArticleList';

interface ArticleListSectionProps {
  articles: Article[];
}

export function ArticleListSection({ articles }: ArticleListSectionProps) {
  return (
    <section
      id="article-list"
      {...stylex.props(styles.container)}
    >
      <ArticleList articles={articles} />
    </section>
  );
}

const styles = stylex.create({
  container: {
    margin: 'auto',
    maxWidth: viewports.contentWidth,
  },
});
