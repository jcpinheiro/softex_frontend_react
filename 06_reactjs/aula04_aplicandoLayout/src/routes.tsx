import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home'
import { Sobre } from './pages/sobre'
import { Contato } from './pages/contato'
import { Layout } from './layout'
import { NotFound } from './pages/notfound'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', Component: Home },
      { path: '/sobre', Component: Sobre },
      { path: '/contato', Component: Contato },
       /* rota para página não encontrada. Deverá ser sempre a última*/
      { path: '*', Component: NotFound } 
    ]
  }

 



])

export { router }