import { useEffect, useRef, useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { throttle } from 'lodash-es';

import { KeyVisualSection } from '@/components/KeyVisualSection';
import { getArticles } from '@/data/article';
import type { Article } from '@/data/article';
import { useIsDesktop, useIsMobile } from '@/hooks';

import { ArticleSection } from './components/ArticleSection';
import { ContactSection } from './components/ContactSection';
import { FloatingActiveHeading } from './components/FloatingActiveHeading';
import { FloatingScrollToTopButton } from './components/FloatingScrollToTopButton';
import { FloatingTOC } from './components/FloatingTOC';
import { ProgressBar } from './components/ProgressBar';

export function Article() {
  const isDesktop = useIsDesktop(1280);
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);

  let articles = getArticles();
  const articleElement = document.getElementById('article');

  const [updatedArticles, setUpdatedArticles] = useState<Article[]>(articles);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [progressBarOffset, setProgressBarOffset] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const main = document.getElementsByTagName('main')[0]!;

    setScrollHeight(document.documentElement.scrollHeight);
    setProgressBarOffset(main.offsetTop);

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
    const timeout = setInterval(() => {
      if (articles.every((article) => article.likeCount === undefined)) {
        articles = getArticles();
      } else {
        clearInterval(timeout);
        setUpdatedArticles(articles);
      }
    }, 100);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div
      {...stylex.props(styles.container)}
      ref={ref}
    >
      <KeyVisualSection
        contents={[updatedArticles[0]]}
        type="ARTICLE"
      />
      <ProgressBar
        offset={progressBarOffset}
        value={scrollY / scrollHeight > 1 ? 1 : Number((scrollY / scrollHeight).toFixed(2))}
      />
      {!isDesktop && (
        <FloatingActiveHeading
          offset={progressBarOffset + 8}
          target={articleElement}
        />
      )}
      <ArticleSection html={updatedArticles[0].content} />
      <ContactSection />
      {isDesktop && <FloatingTOC target={articleElement} />}
      <FloatingScrollToTopButton />
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
