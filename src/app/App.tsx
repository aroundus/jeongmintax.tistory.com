import { useLayoutEffect, useState } from 'react';

import { Home } from '@/pages/home/Home';
import { Article } from '@/pages/page/Article';
import { Category } from '@/pages/category/Category';
import { SearchResult } from '@/pages/search/SearchResult';

import { Layout } from './ui';

import './styles/global.scss';
import './styles/reset.scss';

import 'virtual:stylex.css';

export function App() {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    if (import.meta.env.DEV) {
      const bodyType = import.meta.env.VITE_TISTORY_BODY_TYPE;

      if (bodyType) {
        document.querySelector('body')!.id = `tt-body-${bodyType}`;
      } else {
        document.querySelector('body')!.id = 'tt-body-index';
      }
    }

    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <Layout>
          {document.getElementById('tt-body-index') && <Home />}
          {document.getElementById('tt-body-category') && <Category />}
          {document.getElementById('tt-body-page') && <Article />}
          {document.getElementById('tt-body-search') && <SearchResult />}
        </Layout>
      )}
    </>
  );
}
