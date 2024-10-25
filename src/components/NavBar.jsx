import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import Brand from './Brand';
import ButtonCategory from './ButtonCategory';
import './NavBar.css';

function NavBar() {
  const categories = ['Todo', 'Comidas', 'Postres', 'Bebidas', 'Cafeteria'];

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="d-flex justify-content-between align-items-center">
        <Brand />
        <Nav className="justify-content-center flex-grow-1">
          {categories.map((category) => (
            <ButtonCategory key={category} categoryName={category} />
          ))}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
