import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Intro from './pages/Intro';
import Board from './pages/Board';
import Content from './pages/Content';

const Router = () => {
  const router = createBrowserRouter([
    {
      index: true,
      path: '/',
      element: <Intro />,
    },
    {
      path: '/board',
      element: <Board />,
    },
    {
      path: '/content/:id',
      element: <Content />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
