import * as stylex from '@stylexjs/stylex';

import { KeyVisualSection, PostListSection, ProfileSection } from '@/components/Section';
import { getPosts } from '@/data/post';

export function Home() {
  const keyVisualPosts = getPosts('KEY_VISUAL');
  const listPosts = getPosts('LIST');

  return (
    <div {...stylex.props(styles.container)}>
      {document.querySelector('[data-cover-group="KEY_VISUAL"]') && (
        <KeyVisualSection
          contents={keyVisualPosts}
          type="MAIN"
        />
      )}
      <ProfileSection />
      {document.querySelector('[data-cover-group="LIST"]') && <PostListSection contents={listPosts} />}
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
