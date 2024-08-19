import { Layout } from '@/components';
import { ArticleSection, KeyVisualSection, PostListSection, ProfileSection } from '@/components/Section';
import { getArticles } from '@/data/article';
import { getPosts } from '@/data/post';

import '@/assets/styles/reset.scss';
import '@/assets/styles/global.scss';

import 'virtual:stylex.css';

export function App() {
  const articles = getArticles();
  const posts = getPosts('KEY_VISUAL');

  return (
    <Layout>
      {document.getElementById('tt-body-index') && (
        <>
          {document.querySelector('[data-cover-group="KEY_VISUAL"]') && (
            <KeyVisualSection
              contents={posts}
              type="MAIN"
            />
          )}
          <ProfileSection />
          {document.querySelector('[data-cover-group="LIST"]') && <PostListSection />}
        </>
      )}

      {document.getElementById('tt-body-page') && (
        <>
          <KeyVisualSection
            contents={[articles[0]]}
            type="ARTICLE"
          />
          <ArticleSection html={articles[0].content} />
        </>
      )}
    </Layout>
  );
}
