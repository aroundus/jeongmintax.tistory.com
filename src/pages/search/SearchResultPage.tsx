import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

import * as stylex from '@stylexjs/stylex';

import * as articleService from '@/entities/article/api';
import type { Article } from '@/entities/article/api';
import { ArticleListSection } from '@/entities/article/ui';
import { FloatingWidget } from '@/widgets/floating/ui';

import { SearchResultHeader } from './_ui';

export default function SearchResultPage() {
  const preloadedArticles = articleService.getArticles();
  const pagination = articleService.getPagination();
  const articleListElement = document.getElementById('article-list');
  const keyword = decodeURIComponent(location.pathname.split('/')[2]);

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

  useLayoutEffect(() => {
    if (import.meta.env.DEV) {
      document.querySelector('body')!.id = 'tt-body-search';
    }
  }, []);

  return (
    <div {...stylex.props(styles.container)}>
      <SearchResultHeader
        articleCount={articles.length}
        keyword={keyword}
      />
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
