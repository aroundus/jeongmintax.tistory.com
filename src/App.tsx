import { useLayoutEffect } from 'react';

import { Layout } from '@/components/Layout';
import { Home } from '@/pages/home/Home';
import { Article } from '@/pages/page/Article';
import { Category } from '@/pages/category/Category';
import { SearchResult } from '@/pages/search/SearchResult';

import '@/assets/styles/reset.scss';
import '@/assets/styles/global.scss';

import 'virtual:stylex.css';

const bodyType = import.meta.env.VITE_TISTORY_BODY_TYPE;

export function App() {
  useLayoutEffect(() => {
    if (bodyType) {
      document.querySelector('body')!.id = `tt-body-${bodyType}`;
    } else {
      document.querySelector('body')!.id = 'tt-body-index';
    }
  }, []);

  return (
    <Layout>
      {bodyType === undefined && <Home />}
      {bodyType === 'category' && <Category />}
      {bodyType === 'page' && <Article />}
      {bodyType === 'search' && <SearchResult />}
    </Layout>
  );
}
