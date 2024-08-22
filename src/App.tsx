import { Layout } from '@/components/Layout';
import { ArticleSection, KeyVisualSection } from '@/components/Section';
import { getArticles } from '@/data/article';
import { Home } from '@/pages/Home';
import { SearchResult } from '@/pages/search/SearchResult';

import '@/assets/styles/reset.scss';
import '@/assets/styles/global.scss';

import 'virtual:stylex.css';

export function App() {
  const articles = getArticles();

  return (
    <Layout>
      {document.getElementById('tt-body-index') && <Home />}

      {document.getElementById('tt-body-page') && (
        <>
          <KeyVisualSection
            contents={[articles[0]]}
            type="ARTICLE"
          />
          <ArticleSection html={articles[0].content} />
        </>
      )}

      {document.getElementById('tt-body-category') && <SearchResult />}
      {document.getElementById('tt-body-search') && <SearchResult />}
    </Layout>
  );
}
