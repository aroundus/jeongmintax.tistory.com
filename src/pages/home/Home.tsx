import * as stylex from '@stylexjs/stylex';

import { ArticleListSection } from '@/components/ArticleListSection';
import { CategoryField } from '@/components/CategoryField';
import { KeyVisualSection } from '@/components/KeyVisualSection';
import { getCategories } from '@/data/category';
import { getCoverArticles } from '@/data/article';

import { ProfileSection } from './components/ProfileSection';

export function Home() {
  const categories = getCategories();
  const keyVisualArticles = getCoverArticles('KEY_VISUAL');
  const listArticles = getCoverArticles('LIST');

  return (
    <div {...stylex.props(styles.container)}>
      {document.querySelector('[data-cover="KEY_VISUAL"]') && (
        <KeyVisualSection
          contents={keyVisualArticles}
          type="COVER_ARTICLE"
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
