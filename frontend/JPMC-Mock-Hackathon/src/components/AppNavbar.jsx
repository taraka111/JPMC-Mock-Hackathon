import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#003366' }} variant="dark">
      <Container>
        <Navbar.Brand style={{ fontWeight: 'bold', color: '#fff' }}>
          Poshan Portal
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#about" style={{ color: '#fff' }}>About Us</Nav.Link>
          <Nav.Link href="#contact" style={{ color: '#fff' }}>Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
