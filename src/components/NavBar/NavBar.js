import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './components/CartWidget/CartWidget';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">PATANES- PETSHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Animales" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Perros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Gatos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Veterinarios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Guardia
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Ver todos los productos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
      </Navbar>
      
      
  );
}



export default NavBar;