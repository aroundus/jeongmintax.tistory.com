import { useLayoutEffect } from 'react';

import HomePage from '@/pages/(home)/HomePage';
import ArticlePage from '@/pages/[pageNo]/ArticlePage';
import CategoryPage from '@/pages/category/CategoryPage';
import SearchResultPage from '@/pages/search/SearchResultPage';
import { useIsMobile } from '@/shared/lib';
import { Footer } from '@/widgets/footer/ui';
import { DesktopHeader, MobileHeader } from '@/widgets/header/ui';

import 'virtual:stylex.css';

export default function Preview() {
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    if (document.getElementById('tt-body-page')) {
      document.querySelector('body')!.id = 'tt-body-page';
    }
  }, []);

  return (
    <>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <main>
        {document.getElementById('tt-body-index') && <HomePage />}
        {document.getElementById('tt-body-page') && <ArticlePage />}
        {document.getElementById('tt-body-category') && <CategoryPage />}
        {document.getElementById('tt-body-search') && <SearchResultPage />}
      </main>
      <Footer />
    </>
  );
}
