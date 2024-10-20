import { useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';

import { KeyVisualSection } from '@/components/KeyVisualSection';
import { getArticles } from '@/data/article';
import type { Article } from '@/data/article';
import { useIsDesktop } from '@/hooks';

import { ArticleSection } from './components/ArticleSection';
import { ContactSection } from './components/ContactSection';
import { FloatingTOC } from './components/FloatingTOC';

export function Article() {
  const isDesktop = useIsDesktop(1280);

  let articles = getArticles();
  const articleElement = document.getElementById('article');

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
      <KeyVisualSection
        contents={[updatedArticles[0]]}
        type="ARTICLE"
      />
      <ArticleSection html={updatedArticles[0].content} />
      <ContactSection />
      {isDesktop && <FloatingTOC target={articleElement} />}
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
