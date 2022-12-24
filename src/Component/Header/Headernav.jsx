import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons"; // <-- import styles to be used
import Nav from "react-bootstrap/Nav";

import "./Header.css";
import Container from "react-bootstrap/esm/Container";

const Headernav = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Nav className="justify-content-left" style={{ marginTop: "30px" }}>
          <Nav.Item
            className="itemdesgin"
            style={{ border: "2px solid white", borderRadius: "50px" }}
          >
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </Nav.Item>
          <Nav.Item className="itemdesgin">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>{" "}
          </Nav.Item>
          <Nav.Item className="itemdesgin">
            <FontAwesomeIcon icon={faBed} />
            <span>Cars Rental</span>
          </Nav.Item>
          <Nav.Item className="itemdesgin">
            <FontAwesomeIcon icon={faCar} />
            <span>Attraction</span>
          </Nav.Item>
          <Nav.Item className="itemdesgin">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Texis</span>
          </Nav.Item>
        </Nav>{" "}
      </Container>
    </Navbar>
  );
};

export default Headernav;
