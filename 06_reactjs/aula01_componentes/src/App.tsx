import { Header } from "./components/header"
import { Treinando } from "./components/treinando"
import { Footer } from "./components/footer"
import { MostraAluno } from "./components/teste-use_state"


export default function App() {
  return (
    <main>
      <Header />
      <section>
        <Treinando nome="Maria Antônia" matricula={123} />
        <Treinando nome="João da Silva" matricula={523} />
        <Treinando nome="Pedro José" matricula={823} />
      </section>
      <Footer/>
    
      {/* <MostraAluno/>  */}

    </main>
  )
}

/* interface TreinandoProps {
  nome: string
  matricula: number
}

function Treinando({ nome, matricula }: TreinandoProps) {
  return (
    <article>
      <h2>Nome: {nome}</h2>
      <p>Matricula: {matricula}</p>
    </article>
  )
}
 */
