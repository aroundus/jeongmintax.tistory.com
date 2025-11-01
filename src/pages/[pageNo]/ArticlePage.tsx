import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import * as stylex from '@stylexjs/stylex';
import { throttle } from 'lodash-es';

import * as articleService from '@/entities/article/api';
import type { Article } from '@/entities/article/api';
import {
  ArticleSection,
  CommentSection,
  ContactSection,
  FloatingActiveHeading,
  FloatingTOC,
} from '@/entities/article/ui';
import { FloatingArticleAside } from '@/features/article/ui';
import { useIsDesktop, useIsMobile } from '@/shared/lib';
import { KeyVisualSection } from '@/shared/ui';
import { ProgressBar } from '@/shared/ui';
import { FloatingWidget } from '@/widgets/floating/ui';

export default function ArticlePage() {
  const isDesktop = useIsDesktop(1280);
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);

  const preloadedArticle = articleService.getArticles()[0];
  const articleElement = document.getElementById('root')!.querySelector('#article') as HTMLElement;

  const [article, setArticle] = useState<Article>(preloadedArticle);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [progressBarOffset, setProgressBarOffset] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

  const fetchArticleLikeCount = useCallback(async () => {
    const fetchedReaction = await articleService.getReaction(article.articleId);

    const articleWithLikeCount = {
      ...article,
      likeCount: fetchedReaction.data.reactionCounter.like,
      isLikeActive: fetchedReaction.data.isActive,
    };

    setArticle(articleWithLikeCount);
  }, [article]);

  const handleCommentClick = useCallback(() => {
    const commentElement = document.getElementById('comment')!;

    window.scroll({
      top: commentElement.offsetTop - progressBarOffset,
      behavior: 'smooth',
    });
  }, [article]);

  const handleLikeClick = useCallback(async () => {
    if (article.isLikeActive) {
      await articleService.deleteLikeReaction(article.articleId);
    } else {
      await articleService.postLikeReaction(article.articleId);
    }

    setArticle((prevArticle) => {
      if (typeof article.likeCount === 'number') {
        return {
          ...prevArticle,
          likeCount: article.likeCount + (article.isLikeActive ? -1 : 1),
          isLikeActive: article.isLikeActive ? false : true,
        };
      }

      return prevArticle;
    });
  }, [article]);

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
    fetchArticleLikeCount();
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
        article={article}
        onCommentClick={handleCommentClick}
        onLikeClick={handleLikeClick}
      />
      <ProgressBar
        offset={progressBarOffset}
        value={scrollY / scrollHeight > 1 ? 1 : Number((scrollY / scrollHeight).toFixed(2))}
      />
      {isDesktop && (
        <FloatingArticleAside
          article={article}
          target={articleElement}
        />
      )}
      {!isDesktop && (
        <FloatingActiveHeading
          offset={progressBarOffset + 8}
          target={articleElement}
        />
      )}
      <ArticleSection html={article.content} />
      <ContactSection />
      <CommentSection />
      {isDesktop && <FloatingTOC target={articleElement} />}
      <FloatingWidget.Container target={articleElement}>
        <FloatingWidget.ScrollToTopButton />
      </FloatingWidget.Container>
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
