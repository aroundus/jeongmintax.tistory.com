import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

import * as stylex from '@stylexjs/stylex';

import * as articleService from '@/entities/article/api';
import type { Article } from '@/entities/article/api';
import { ArticleListSection } from '@/entities/article/ui';
import * as categoryService from '@/entities/category/api';
import { CategoryField } from '@/entities/category/ui';
import { ProfileSection } from '@/features/profile/ui';
import { KeyVisualSection } from '@/shared/ui';
import { FloatingWidget } from '@/widgets/floating/ui';

export default function HomePage() {
  const categories = categoryService.getCategories();
  const pagination = articleService.getPagination();
  const preloadedArticles = articleService.getArticles();
  const articleListElement = document.getElementById('article-list');

  const [articles, setArticles] = useState<Article[]>(preloadedArticles);

  async function fetchArticlesLikeCount() {
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
  }

  const handleKeyVisualLikeClick = useCallback(
    async (articleIndex: number) => {
      const article = articles[articleIndex];

      if (article.isLikeActive) {
        await articleService.deleteLikeReaction(article.articleNo);
      } else {
        await articleService.postLikeReaction(article.articleNo);
      }

      setArticles((prevArticles) =>
        prevArticles.map((prevArticle, prevArticleIndex) => {
          if (prevArticleIndex === articleIndex && typeof article.likeCount === 'number') {
            return {
              ...prevArticle,
              likeCount: article.likeCount + (article.isLikeActive ? -1 : 1),
              isLikeActive: article.isLikeActive ? false : true,
            };
          }

          return prevArticle;
        }),
      );
    },
    [articles],
  );

  useEffect(() => {
    fetchArticlesLikeCount();
  }, []);

  console.log(articles);

  useLayoutEffect(() => {
    if (import.meta.env.DEV) {
      document.querySelector('body')!.id = 'tt-body-index';
    }
  }, []);

  return (
    <div {...stylex.props(styles.container)}>
      <KeyVisualSection
        articles={articles}
        onLikeClick={handleKeyVisualLikeClick}
      />
      <ProfileSection />
      <CategoryField categories={categories} />
      <ArticleListSection articles={articles} />
      <FloatingWidget.Container target={articleListElement}>
        {pagination.prevPath && <FloatingWidget.GoPrevPageButton path={pagination.prevPath} />}
        {pagination.nextPath && <FloatingWidget.GoNextPageButton path={pagination.nextPath} />}
        <FloatingWidget.ScrollToTopButton />
      </FloatingWidget.Container>
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
