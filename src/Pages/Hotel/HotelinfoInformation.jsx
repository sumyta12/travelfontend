import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

const HotelinfoInformation = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <h1>How to book a hotel?</h1>
          <p>
            When you book with Expedia, planning the ultimate vacation is easier
            than ever. Not only will you be able to find a hotel for your trip,
            but we can take care of your flight as well, with the potential for
            additional savings if you book your flight and your stay together.
            Plus, you'll find flexible cancellation policies on numerous hotels
            along with opportunities for booking on short notice. You can become
            an Expedia member for free and enjoy even more discounts.
          </p>
        </Col>

        <Col xs={6} md={4}>
          <Card border="info" style={{ width: "18rem" }}>
            
            <Card.Body>
              <Card.Title>Perfect For night stay</Card.Title>
              <Card.Text >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text>
              $997
              </Card.Text>
              <Button variant="primary" style={{width:'100%'}}>Book Now</Button>
         
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HotelinfoInformation;
