import './css/header.css'
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from "react-bootstrap"

interface HeaderProps {
    title?: string
}

export function Header({title="Sistema de Treinandos"}: HeaderProps) {
    return (
        <header className='header'>
           <Navbar expand="lg" bg="light" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">{title}</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" active>
              Home
            </Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
         

          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="me-2"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    )
      

}