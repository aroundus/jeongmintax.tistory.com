import { Suspense } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { rootRoute } from './routes';

import './styles/reset.scss';
import './styles/global.scss'; // eslint-disable-line

import 'virtual:stylex.css';

export function App() {
  const router = createBrowserRouter([rootRoute]);

  return (
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
