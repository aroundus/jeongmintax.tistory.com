import { useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';

import { KeyVisualSection } from '@/components/KeyVisualSection';
import { getArticles } from '@/data/article';
import type { Article } from '@/data/article';

import { ArticleSection } from './components/ArticleSection';
import { ContactSection } from './components/ContactSection';

export function Article() {
  let articles = getArticles();

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
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
