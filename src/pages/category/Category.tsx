import { useCallback, useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';

import * as articleService from '@/entities/article/api';
import type { Article } from '@/entities/article/api';
import * as categoryService from '@/entities/category/api';
import { ArticleListSection } from '@/features/article/ui';
import { CategoryField } from '@/features/category/ui';

import { CategoryHeader } from './_ui';

export function Category() {
  const preloadedArticles = articleService.getArticles();
  const categories = categoryService.getCategories();
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
      <ArticleListSection articles={articles} />
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
