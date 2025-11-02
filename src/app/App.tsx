import { Suspense } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { dayjs } from '@/shared/lib';

import Preview from './Preview';
import { rootRoute } from './routes';

import './styles/tailwind.css';
import './styles/style.scss'; // eslint-disable-line

import 'virtual:stylex.css';

dayjs.initializeLocale();

export function App() {
  const router = createBrowserRouter([rootRoute]);

  // 관리자 페이지 스킨 편집 미리 보기
  if (window.location.pathname === 'srcdoc') {
    return <Preview />;
  }

  return (
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
