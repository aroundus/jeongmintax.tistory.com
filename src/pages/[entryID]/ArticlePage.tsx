import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import * as stylex from '@stylexjs/stylex';
import { throttle } from 'lodash-es';

import * as articleService from '@/entities/article/api';
import type { Article } from '@/entities/article/api';
import {
  ArticleAside,
  ArticleSection,
  CommentSection,
  ContactSection,
  FloatingActiveHeading,
  FloatingTOC,
} from '@/features/article/ui';
import { useIsDesktop, useIsMobile } from '@/shared/lib';
import { KeyVisualSection } from '@/shared/ui';
import { FloatingScrollToTopButton, ProgressBar } from '@/shared/ui';

export default function ArticlePage() {
  const isDesktop = useIsDesktop(1280);
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);

  const preloadedArticles = articleService.getArticles();
  const articleElement = document.getElementById('article');

  const [articles, setArticles] = useState<Article[]>(preloadedArticles);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [progressBarOffset, setProgressBarOffset] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

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

  const handleCommentClick = useCallback(() => {
    const commentElement = document.getElementById('comment')!;

    window.scroll({
      top: commentElement.offsetTop - progressBarOffset,
      behavior: 'smooth',
    });
  }, [articles]);

  const handleLikeClick = useCallback(
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
    const main = document.getElementsByTagName('main')[0]!;

    setScrollHeight(document.documentElement.scrollHeight);
    setProgressBarOffset(isMobile ? 0 : main.offsetTop);

    function handleScroll() {
      setScrollY(window.scrollY + window.innerHeight);
    }

    const throttledScroll = throttle(handleScroll, 50);

    handleScroll();
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [ref.current, isMobile]);

  useEffect(() => {
    fetchArticlesLikeCount();
  }, []);

  useLayoutEffect(() => {
    if (import.meta.env.DEV) {
      document.querySelector('body')!.id = 'tt-body-page';
    }
  }, []);

  return (
    <div
      {...stylex.props(styles.container)}
      ref={ref}
    >
      <KeyVisualSection
        article={articles[0]}
        type="ARTICLE"
        onCommentClick={handleCommentClick}
        onLikeClick={handleLikeClick}
      />
      <ProgressBar
        offset={progressBarOffset}
        value={scrollY / scrollHeight > 1 ? 1 : Number((scrollY / scrollHeight).toFixed(2))}
      />
      {isDesktop && (
        <ArticleAside
          article={articles[0]}
          target={articleElement}
        />
      )}
      {!isDesktop && (
        <FloatingActiveHeading
          offset={progressBarOffset + 8}
          target={articleElement}
        />
      )}
      <ArticleSection html={articles[0].content} />
      <ContactSection />
      <CommentSection />
      {isDesktop && <FloatingTOC target={articleElement} />}
      <FloatingScrollToTopButton />
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
