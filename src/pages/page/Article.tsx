import * as stylex from '@stylexjs/stylex';

import { ArticleSection, KeyVisualSection } from '@/components/Section';
import { getArticles } from '@/data/article';

export function Article() {
  const articles = getArticles();

  return (
    <div {...stylex.props(styles.container)}>
      <KeyVisualSection
        contents={[articles[0]]}
        type="ARTICLE"
      />
      <ArticleSection html={articles[0].content} />
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
