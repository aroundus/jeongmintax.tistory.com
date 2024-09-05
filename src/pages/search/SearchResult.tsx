import * as stylex from '@stylexjs/stylex';

import { ArticleListSection } from '@/components/Section';
import { getArticles } from '@/data/article';

import { SearchResultHeader } from './components/SearchResultHeader';

export function SearchResult() {
  const articles = getArticles();
  const keyword = decodeURIComponent(location.pathname.split('/')[2]);

  return (
    <div {...stylex.props(styles.container)}>
      <SearchResultHeader
        keyword={keyword}
        postCount={articles.length}
      />
      <ArticleListSection contents={articles} />
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
