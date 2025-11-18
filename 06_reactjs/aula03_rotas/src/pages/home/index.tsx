import { Link } from "react-router-dom"

export function Home() {
  return (
    <div>
      <h1>Bem Vindo a Home Page!!</h1>
      <p>Essa é a nossa primeira páigna sobre navegação</p>
      <Link to="/sobre">Ir para a página Sobre</Link>
      <br />
      <Link to="/contato">Contatos</Link>
    </div>
  )
}