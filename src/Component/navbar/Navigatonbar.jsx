import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import "./Navbar.css";
const Navigatonbar = () => {
  return (
    <>
    <Navbar variant="dark" sticky="top" className="raw_css_nav">
    <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Hotel Reservation System
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#home">
          <Button className="text-white" variant="outline-danger">Registration</Button>
          </Nav.Link>
          <Nav.Link href="#home">
          <Button className="text-white"  variant="outline-primary">Login</Button>
          </Nav.Link>
       </Nav>
      </Container>
    </Navbar>
    </>
  );
};

export default Navigatonbar;
