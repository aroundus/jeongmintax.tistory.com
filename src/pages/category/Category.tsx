import { useCallback, useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';

import { ArticleListSection } from '@/components/ArticleListSection';
import { CategoryField } from '@/components/CategoryField';
import { getArticles } from '@/data/article';
import type { Article } from '@/data/article';
import { getCategories } from '@/data/category';
import * as articleService from '@/services/article';

import { CategoryHeader } from './components/CategoryHeader';

export function Category() {
  const preloadedArticles = getArticles();
  const categories = getCategories();
  const keyword = location.pathname.split('/')[2];

  const [articles, setArticles] = useState<Article[]>(preloadedArticles);

  const fetchArticlesLikeCount = useCallback(async () => {
    const articlesWithLikeCount: Article[] = [];

    for (let index = 0; index < articles.length; index += 1) {
      const article = articles[index];
      const fetchedReaction = await articleService.getReaction(article.articleNo);

      articlesWithLikeCount.push({
        ...article,
        likeCount: fetchedReaction.data.reactionCounter.like,
        isLikeActive: fetchedReaction.data.isActive,
      });
    }

    setArticles(articlesWithLikeCount);
  }, [articles]);

  useEffect(() => {
    fetchArticlesLikeCount();
  }, []);

  return (
    <div {...stylex.props(styles.container)}>
      <CategoryHeader
        articleCount={articles.length}
        keyword={keyword ? `#${decodeURIComponent(keyword)}` : '전체'}
      />
      <CategoryField categories={categories} />
      <ArticleListSection contents={articles} />
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
