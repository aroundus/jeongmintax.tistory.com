import { useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';

import { ArticleListSection } from '@/components/ArticleListSection';
import { getArticles } from '@/data/article';
import type { Article } from '@/data/article';

import { SearchResultHeader } from './components/SearchResultHeader';

export function SearchResult() {
  let articles = getArticles();
  const keyword = decodeURIComponent(location.pathname.split('/')[2]);

  const [updatedArticles, setUpdatedArticles] = useState<Article[]>(articles);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (articles.every((article) => article.likeCount === undefined)) {
        articles = getArticles();
      } else {
        clearTimeout(timeout);
        setUpdatedArticles(articles);
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div {...stylex.props(styles.container)}>
      <SearchResultHeader
        keyword={keyword}
        articleCount={articles.length}
      />
      <ArticleListSection contents={updatedArticles} />
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
