import { Layout } from '@/components';
import { ArticleSection, KeyVisualSection, PostListSection, ProfileSection } from '@/components/Section';
import { getArticle } from '@/data/article';
import { getPosts } from '@/data/post';

import '@/assets/styles/reset.scss';
import '@/assets/styles/global.scss';

import 'virtual:stylex.css';

export function App() {
  const article = getArticle();
  const posts = getPosts('KEY_VISUAL');

  return (
    <Layout>
      {document.getElementById('tt-body-index') && document.querySelector('[data-cover-group="KEY_VISUAL"]') && (
        <KeyVisualSection
          isButtonVisible
          posts={posts}
        />
      )}
      {document.getElementById('tt-body-index') && <ProfileSection />}
      {document.getElementById('tt-body-index') && document.querySelector('[data-cover-group="LIST"]') && (
        <PostListSection />
      )}
      {document.getElementById('tt-body-page') && (
        <>
          <KeyVisualSection posts={[article]} />
          <ArticleSection html={article.content} />
        </>
      )}
    </Layout>
  );
}
