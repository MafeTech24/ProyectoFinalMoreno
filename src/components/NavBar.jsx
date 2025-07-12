import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router'; 
import logo from '../assets/logo.webp'; 

function NavBar() {
  const [categorias, setCategorias] = useState([]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo Pixel & Moda" style={{ height: '50px', width: 'auto', marginRight: '10px' }}/>
          <span className="fw-bold brand-text">Pixel&Moda</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">              
              <NavDropdown.Item to={`/category/electronics`} as={NavLink}>Electrónica</NavDropdown.Item> 
              <NavDropdown.Item to={`/category/jewelery`} as={NavLink}>Joyería</NavDropdown.Item>  
              <NavDropdown.Item to={`/category/mens-clothing`} as={NavLink}>Ropa de Hombre</NavDropdown.Item>
              <NavDropdown.Item to={`/category/womens-clothing`} as={NavLink}>Ropa de Mujer</NavDropdown.Item>
            </NavDropdown>            
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;





