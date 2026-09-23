import { createBrowserRouter } from 'react-router';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { RootLayout } from '../layouts/RootLayout';
import { SearchPage } from '../pages/SearchPage/SearchPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/login',
        element: <>Login</>,
      },
      {
        path: '/signup',
        element: <>Sign Up</>,
      },
    ],
  },
]);
