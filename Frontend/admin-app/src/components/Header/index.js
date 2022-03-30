import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function Header() {
  const auth = useSelector((state) => state.auth);

  const renderLoggedInLinks = () => (
    <Nav>
      <li className="nav-item">
        <span className="nav-link">Signout</span>
      </li>
    </Nav>
  );
  const renderNonLoggedInLinks = () => (
    <Nav>
      <Nav.Link href="/signup">Signup</Nav.Link>
      <Nav.Link eventKey={2} href="/signin">
        Signin
      </Nav.Link>
    </Nav>
  );

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ zIndex: 1 }}
    >
      <Container fluid>
        <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/*  <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
          {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
