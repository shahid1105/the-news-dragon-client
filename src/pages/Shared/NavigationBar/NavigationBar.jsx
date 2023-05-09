import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">
                <Link to={"/category/0"}>Home</Link>
              </Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              )}

              {user ? (
                <Button variant="secondary">Log Out</Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
