import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Intro from './pages/Intro/Intro';

const Router = () => {
  const router = createBrowserRouter([
    {
      index: true,
      path: '/',
      element: <Intro />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
