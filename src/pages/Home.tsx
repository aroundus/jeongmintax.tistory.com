import * as stylex from '@stylexjs/stylex';

import { CategoryField } from '@/components/CategoryField';
import { KeyVisualSection, PostListSection, ProfileSection } from '@/components/Section';
import { getCategories } from '@/data/category';
import { getCoverArticles } from '@/data/article';

export function Home() {
  const categories = getCategories();
  const keyVisualPosts = getCoverArticles('KEY_VISUAL');
  const listPosts = getCoverArticles('LIST');

  return (
    <div {...stylex.props(styles.container)}>
      {document.querySelector('[data-cover="KEY_VISUAL"]') && (
        <KeyVisualSection
          contents={keyVisualPosts}
          type="HOME"
        />
      )}
      <ProfileSection />
      <CategoryField categories={categories} />
      {document.querySelector('[data-cover="LIST"]') && <PostListSection contents={listPosts} />}
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
