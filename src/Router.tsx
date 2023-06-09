import { createBrowserRouter } from 'react-router-dom';
import Root from '@/Root';
import Home from '@/pages/Home';
import About from '@/pages/About';
import User from '@/pages/users/User';
import Followers from '@/pages/users/Followers';
import ErrorComponent from '@/components/ErrorComponent';
import NotFound from '@/pages/NotFound';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      children: [
         {
            path: '',
            element: <Home />,
            errorElement: <ErrorComponent />,
         },
         {
            path: 'about',
            element: <About />,
         },
         {
            path: 'users/:userId',
            element: <User />,
            children: [
               {
                  path: 'followers',
                  element: <Followers />,
               },
            ],
         },
      ],
      errorElement: <NotFound />,
   },
]);

export default router;
