import { redirect } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import Layout from '@/pages/Layout';
import CategoryPage from '@/pages/category/CategoryPage';
import HomePage from '@/pages/home/HomePage';
import ArticlePage from '@/pages/page/ArticlePage';
import SearchResultPage from '@/pages/search/SearchResultPage';

export const rootRoute: RouteObject = {
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: 'category',
      children: [
        {
          index: true,
          element: <CategoryPage />,
        },
        {
          path: ':categoryName',
          element: <CategoryPage />,
        },
      ],
    },
    {
      path: 'search',
      children: [
        {
          index: true,
          loader: () => {
            window.location.href = '/';

            return null;
          },
        },
        {
          path: ':keyword',
          element: <SearchResultPage />,
        },
      ],
    },
    {
      path: ':pageNo',
      element: <ArticlePage />,
      loader: ({ params }) => {
        if (Number.isNaN(Number(params.pageNo))) {
          return redirect('/');
        }

        return null;
      },
    },
  ],
};
