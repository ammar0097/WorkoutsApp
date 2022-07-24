import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbarbt from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Navbarbt bg="light" variant="light">
      <Container>
        <Navbarbt.Brand><Link to="/" style={{ textDecoration: 'none' ,color: 'inherit' }}>Workout App</Link></Navbarbt.Brand>
        <Nav className="me-auto">
          <Link to="/" style={{ textDecoration: 'none' ,color: 'inherit' }}>
          <Nav.Link>Home</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbarbt>
  );
};

export default Navbar;
