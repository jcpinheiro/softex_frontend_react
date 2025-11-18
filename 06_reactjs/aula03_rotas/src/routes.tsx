import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home'
import { Sobre } from './pages/sobre'
import { Contato } from './pages/contato'
import { NotFound } from './pages/notfound'

const router = createBrowserRouter([
  { path: '/', Component: Home  },
  { path: '/sobre', Component: Sobre },

  /* outra maneira criar uma rota */
  { path: '/contato', element: <Contato /> },

  /* rota para página não encontrada. Deverá ser sempre a última*/
  { path: '*', Component: NotFound } 



])

export { router }