import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <Navbar bg="light" expand="lg" className="border-top border-bottom">
    <Container>
      <Navbar.Brand as={Link} to="/">Furniture Store</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link>Relatórios</Nav.Link>
          <NavDropdown title="Cadastro">
            <NavDropdown.Item>Novo</NavDropdown.Item>
            <NavDropdown.Item>Editar</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Pesquisar</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl placeholder="Search" className="me-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default MainNavbar;