import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Intro from './pages/Intro';
import Board from './pages/Board';

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
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
