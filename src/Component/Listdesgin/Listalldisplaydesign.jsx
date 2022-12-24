import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const Listalldisplaydesign = ({ hotels }) => {
  const { address, name, picture, balance ,_id} = hotels;
  const navigation = useNavigate();
  const handlerchanges = id => {
       const url = `/hotels/${id}`;
       navigation(url);
     
    
  }
  return (
    <div className="m-2" style={{borderRadius:'10px'}}>
    <Card >
      <Row>
        <Col sm={4}>
          <Card.Img
            variant="top"
            src={picture}
            alt={name}
            style={{ width: "100%" ,borderRadius:'10px',justifyContent:'center',alignItems:'center'}}
          />
        </Col>

        <Col sm={8}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{address}</Card.Text>
            <div >
            <Row className="mt-4">
              <Col sm={4}>{balance}</Col>
              <Col sm={8}>
                <Button  variant="primary" onClick={()=>handlerchanges(_id)}>View Details</Button>
              </Col>
            </Row>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    </div>
  );
};

export default Listalldisplaydesign;
