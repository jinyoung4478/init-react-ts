import { Outlet, createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import Home from '@/pages/Home'
import About from '@/pages/About'
import ErrorComponent from '@/components/ErrorComponent'
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  {
    path: '',
    element: <Outlet context={{ darkMode: true }} />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
    errorElement: <NotFound />,
  },
])

export default router
