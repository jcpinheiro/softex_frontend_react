import { Nav } from 'react-bootstrap';
export default function SecondaryMenu(){
  const items = ["Home","About Us","Store","Blog","Gallery","Contact Us"];
  return (
    <Nav className="container justify-content-between flex-column text-center flex-md-row">
      {items.map(i=> <Nav.Link key={i}>{i}</Nav.Link>)}
    </Nav>
  );
}