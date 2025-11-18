import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h1>Página Não Encontrada!</h1>
      <h3>Erro 404</h3>
      <hr />
      <Link to="/">Home</Link>
    </div>
  )
}