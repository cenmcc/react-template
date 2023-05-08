import { createHashRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import App from '@/pages/App'
import NotFound from '@/pages/NotFound'
interface Data {
  msg: string
}
const loader = (): Data => ({ msg: 'HELLO WORLD' })

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        loader: loader,
        element: <Home />,
      },
      {
        path: 'about',
        lazy: () => import('@/pages/About'),
      },
    ],
  },
])
// const element = useRoutes(router)

export default router
