import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Intro from './pages/Intro';
import Register1 from './pages/Register/Register1';
import Board from './pages/Board';
import Content from './pages/Content';
import Write from './pages/Write';
import My from './pages/My';
import Search from './pages/Search';
import Register2 from './pages/Register/Register2';
import Loading from './components/organisms/Loading';

const Router = () => {
  const router = createBrowserRouter([
    {
      index: true,
      path: '/',
      element: <Intro />,
    },
    {
      path: '/register/1',
      element: <Register1 />,
    },
    {
      path: '/register/2',
      element: <Register2 />,
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
    {
      path: 'search/:searchWord',
      element: <Search />,
    },
    {
      path: 'loading',
      element: <Loading />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
