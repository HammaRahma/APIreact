import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/users">Users</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    
    </div>
  )
}

export default Navigation