import { useCallback, useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';

import { ArticleListSection } from '@/components/ArticleListSection';
import { CategoryField } from '@/components/CategoryField';
import { KeyVisualSection } from '@/components/KeyVisualSection';
import { getCategories } from '@/data/category';
import { getCoverArticles } from '@/data/article';
import type { CoverArticle } from '@/data/article';
import * as articleService from '@/services/article';

import { ProfileSection } from './components/ProfileSection';

export function Home() {
  const categories = getCategories();
  const preloadedKeyVisualArticles = getCoverArticles('key-visual');
  const preloadedListArticles = getCoverArticles('list');

  const [keyVisualArticles, setKeyVisualArticles] = useState<CoverArticle[]>(preloadedKeyVisualArticles);
  const [listArticles, setListArticles] = useState<CoverArticle[]>(preloadedListArticles);

  async function fetchKeyVisualArticlesLikeCount() {
    const articlesWithLikeCount: CoverArticle[] = [];

    for (let index = 0; index < keyVisualArticles.length; index += 1) {
      const article = keyVisualArticles[index];
      const fetchedReaction = await articleService.getReaction(article.articleNo);

      articlesWithLikeCount.push({
        ...article,
        likeCount: fetchedReaction.data.reactionCounter.like,
        isLikeActive: fetchedReaction.data.isActive,
      });
    }

    setKeyVisualArticles(articlesWithLikeCount);
  }

  async function fetchListArticlesLikeCount() {
    const articlesWithLikeCount: CoverArticle[] = [];

    for (let index = 0; index < listArticles.length; index += 1) {
      const article = listArticles[index];
      const fetchedReaction = await articleService.getReaction(article.articleNo);

      articlesWithLikeCount.push({
        ...article,
        likeCount: fetchedReaction.data.reactionCounter.like,
        isLikeActive: fetchedReaction.data.isActive,
      });
    }

    setListArticles(articlesWithLikeCount);
  }

  const handleKeyVisualLikeClick = useCallback(
    async (articleIndex: number) => {
      const article = keyVisualArticles[articleIndex];

      if (article.isLikeActive) {
        await articleService.deleteLikeReaction(article.articleNo);
      } else {
        await articleService.postLikeReaction(article.articleNo);
      }

      setKeyVisualArticles((prevArticles) =>
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
    [keyVisualArticles],
  );

  useEffect(() => {
    fetchKeyVisualArticlesLikeCount();
    fetchListArticlesLikeCount();
  }, []);

  return (
    <div {...stylex.props(styles.container)}>
      {document.querySelector('[data-cover="key-visual"]') && (
        <KeyVisualSection
          articles={keyVisualArticles}
          type="COVER_ARTICLE"
          onLikeClick={handleKeyVisualLikeClick}
        />
      )}
      <ProfileSection />
      <CategoryField categories={categories} />
      {document.querySelector('[data-cover="list"]') && <ArticleListSection articles={listArticles} />}
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
