import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Intro from './pages/Intro';
import Board from './pages/Board';
import Content from './pages/Content';
import Write from './pages/Write';
import My from './pages/My';

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
    {
      path: '/write',
      element: <Write />,
    },
    {
      path: '/my',
      element: <My />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
