import React from "react";
import Container from 'react-bootstrap/Container';
import { Button } from '@chakra-ui/react'
import Nav from 'react-bootstrap/Nav';
import Navbarbt from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";


const Navbar = () => {
  const {logout} = useLogout();
  const handleClick = () => {
    logout();
  }
  return (
    <Navbarbt style={{ backgroundColor: '#0000' }} bg="light" variant="light">
      <Container>
        <Navbarbt.Brand><Link to="/" style={{ textDecoration: 'none' ,color: 'inherit' }}>Workout App</Link></Navbarbt.Brand>
        <Nav className="me-auto">
          <Link to="/" style={{ textDecoration: 'none' ,color: 'inherit' }}>
          Home
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' ,color: 'inherit' }}>
          Login
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none' ,color: 'inherit' }}>
          Signup
          </Link>
          
          <Button onClick={handleClick} colorScheme='blue' variant='outline'>
          Logout
          </Button>
        </Nav>
      </Container>
    </Navbarbt>
  );
};

export default Navbar;
