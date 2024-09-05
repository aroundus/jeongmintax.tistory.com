import * as stylex from '@stylexjs/stylex';

import { CategoryField } from '@/components/CategoryField';
import { ArticleListSection, KeyVisualSection, ProfileSection } from '@/components/Section';
import { getCategories } from '@/data/category';
import { getCoverArticles } from '@/data/article';

export function Home() {
  const categories = getCategories();
  const keyVisualArticles = getCoverArticles('KEY_VISUAL');
  const listArticles = getCoverArticles('LIST');

  return (
    <div {...stylex.props(styles.container)}>
      {document.querySelector('[data-cover="KEY_VISUAL"]') && (
        <KeyVisualSection
          contents={keyVisualArticles}
          type="HOME"
        />
      )}
      <ProfileSection />
      <CategoryField categories={categories} />
      {document.querySelector('[data-cover="LIST"]') && <ArticleListSection contents={listArticles} />}
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
