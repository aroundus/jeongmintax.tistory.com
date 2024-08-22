import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { Page } from '@/pages/page/Page';
import { SearchResult } from '@/pages/search/SearchResult';

import '@/assets/styles/reset.scss';
import '@/assets/styles/global.scss';

import 'virtual:stylex.css';

export function App() {
  return (
    <Layout>
      {document.getElementById('tt-body-index') && <Home />}
      {document.getElementById('tt-body-page') && <Page />}
      {document.getElementById('tt-body-category') && <SearchResult />}
      {document.getElementById('tt-body-search') && <SearchResult />}
    </Layout>
  );
}
