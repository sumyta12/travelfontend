import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { format } from "date-fns";
import Form from "react-bootstrap/Form";
import { DateRange } from "react-date-range";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Listrightdesign from "./Listrightdesign";

const Listleftsitedesgin = ({ destination, date, setdate, option }) => {
  const [open, setopen] = useState(true);
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Card border="info" style={{ width: "20rem" }}>
              <Card.Header>Search Hotel</Card.Header>
              <Card.Body>
                <Form.Control type="text" placeholder={destination} />
                
            <h1></h1>
                <Card.Text>
                  <span onClick={() => setopen(!open)}>
                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                      date[0].endDate,
                      "MM/dd/yyyy"
                    )}`}
                  </span>

                  {!open && (
                    <DateRange
                      onChange={(item) => setdate([item.selection])}
                      minDate={new Date()}
                      ranges={date}
                      style={{ width: "300px" }}
                    />
                  )}
                </Card.Text>
                <div>
                  <Row>
                    <Col sm={8}>
                      <Form.Label>Min price per night</Form.Label>
                    </Col>
                    <Col sm={4}>
                      <Form.Control size="sm" type="text" placeholder="price" />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={8}>
                      <Form.Label>Max price per night</Form.Label>
                    </Col>
                    <Col sm={4}>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="price "
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={8}>
                      <Form.Label>Adult</Form.Label>
                    </Col>
                    <Col sm={4}>
                      <Form.Control
                        min={1}
                        size="sm"
                        type="number"
                        placeholder={option.adult}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={8}>
                      <Form.Label>Children</Form.Label>
                    </Col>
                    <Col sm={4}>
                      <Form.Control
                        min={0}
                        size="sm"
                        type="number"
                        placeholder={option.children}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={8}>
                      <Form.Label>Room</Form.Label>
                    </Col>
                    <Col sm={4}>
                      <Form.Control
                        min={1}
                        size="sm"
                        type="number"
                        placeholder={option.room}
                      />
                    </Col>
                  </Row>
                </div>
              </Card.Body>

              <Button className="m-3">Search</Button>
            </Card>
          </Col>
          <Col xs={12} md={8} >
            <Listrightdesign />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Listleftsitedesgin;
