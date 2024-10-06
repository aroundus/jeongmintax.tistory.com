import { useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';

import { ArticleListSection } from '@/components/ArticleListSection';
import { CategoryField } from '@/components/CategoryField';
import { getArticles } from '@/data/article';
import type { Article } from '@/data/article';
import { getCategories } from '@/data/category';

import { CategoryHeader } from './components/CategoryHeader';

export function Category() {
  let articles = getArticles();
  const categories = getCategories();
  const keyword = location.pathname.split('/')[2];

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
      <CategoryHeader
        articleCount={updatedArticles.length}
        keyword={keyword ? `#${decodeURIComponent(keyword)}` : '전체'}
      />
      <CategoryField categories={categories} />
      <ArticleListSection contents={updatedArticles} />
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
