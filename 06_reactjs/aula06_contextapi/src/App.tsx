import { Alunos } from './components/Alunos'
import { Footer } from './components/Footer'

import UserProvider from './contexts/user'

function App() {
  return (
    <UserProvider>
      <div>
        <h1>Escola DEV</h1>
        <br/>
        <hr/>

        <Alunos />

        <Footer/>

      </div>
    </UserProvider>
  )
}

export default App
