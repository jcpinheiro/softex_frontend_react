import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export function Layout() {
  return (
    <>
        <Header />      
        <Outlet />
        <br />
        <hr />
        <footer> &copy Todos os direitos reservados</footer>
    </>
  )
}