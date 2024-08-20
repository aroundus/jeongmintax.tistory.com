import { Layout } from '@/components';
import { ArticleSection, KeyVisualSection, PostListSection, ProfileSection } from '@/components/Section';
import { getArticles } from '@/data/article';
import { getPosts } from '@/data/post';
import { SearchResult } from '@/pages/search-result/SearchResult';

import '@/assets/styles/reset.scss';
import '@/assets/styles/global.scss';

import 'virtual:stylex.css';

export function App() {
  const articles = getArticles();
  const keyVisualPosts = getPosts('KEY_VISUAL');
  const listPosts = getPosts('LIST');

  return (
    <Layout>
      {document.getElementById('tt-body-index') && (
        <>
          {document.querySelector('[data-cover-group="KEY_VISUAL"]') && (
            <KeyVisualSection
              contents={keyVisualPosts}
              type="MAIN"
            />
          )}
          <ProfileSection />
          {document.querySelector('[data-cover-group="LIST"]') && <PostListSection contents={listPosts} />}
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

      {document.getElementById('tt-body-search') && <SearchResult />}
    </Layout>
  );
}
