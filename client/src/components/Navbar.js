import React from "react";
import Container from "react-bootstrap/Container";
import { Button } from "@chakra-ui/react";
import Nav from "react-bootstrap/Nav";
import Navbarbt from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <>
      <Navbarbt style={{ backgroundColor: "#0000" }} bg="light" variant="light">
        <Container>
          <Navbarbt.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Workout App
            </Link>
          </Navbarbt.Brand>
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            {!user && (
              <>
                <Nav.Link>Signup</Nav.Link>
                <Nav.Link>Login</Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link><span>{user.email}</span></Nav.Link>
                <Button
                  onClick={handleClick}
                  colorScheme="blue"
                  variant="outline"
                >
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Container>
      </Navbarbt>
    </>
  );
};

export default Navbar;
