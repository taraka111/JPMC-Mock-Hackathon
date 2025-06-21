import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AppNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar style={{ backgroundColor: '#003366' }} variant="dark">
      <Container>
        <Navbar.Brand style={{ fontWeight: 'bold', color: '#fff' }}>
          Aanganwadi Portal
        </Navbar.Brand>
        <Button
          variant="outline-light"
          onClick={() => navigate("/login-beneficiary")}
        >
          Login
        </Button>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;