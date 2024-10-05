import * as stylex from '@stylexjs/stylex';

import { KeyVisualSection } from '@/components/KeyVisualSection';
import { getArticles } from '@/data/article';

import { ArticleSection } from './components/ArticleSection';
import { ContactSection } from './components/ContactSection';

export function Article() {
  const articles = getArticles();

  return (
    <div {...stylex.props(styles.container)}>
      <KeyVisualSection
        contents={[articles[0]]}
        type="ARTICLE"
      />
      <ArticleSection html={articles[0].content} />
      <ContactSection />
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
