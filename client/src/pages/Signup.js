import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button , Text } from "@chakra-ui/react";
import Container from "react-bootstrap/esm/Container";
import { useSignup } from "../hooks/useSignup";
import { Alert, AlertIcon } from "@chakra-ui/react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit} style={{ marginTop: 100, width: 400 }}>
        <Text fontSize="4xl">Signup</Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button colorScheme="blue" type="submit" isLoading={isLoading}>
          Submit
        </Button>
        {error && (
          <Alert status="error" style={{marginTop : 20}}>
            <AlertIcon />
            {error}
          </Alert>
        )}
      </Form>
    </Container>
  );
};

export default Signup;
