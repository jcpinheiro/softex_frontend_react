import { Link } from "react-router-dom";

import "./header.css";

export function Header() {
    return (
        <header>
            <h1>Bem Vindo!!!</h1>
            <nav>
                 <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/contato">Contatos</Link></li>
                </ul>
              
              {/*   <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul> */}
            </nav>
        </header>
    );
}