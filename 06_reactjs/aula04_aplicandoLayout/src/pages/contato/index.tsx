import { Link } from "react-router-dom";
export function Contato() {
  return (
    <div>
      <h1>Página de Contato!</h1>
      <h3>Telefone: (98) 99887-1234</h3>
      <hr />

      <Link to="/">Home</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
    </div>
  )
}