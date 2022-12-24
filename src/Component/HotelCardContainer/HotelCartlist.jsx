import Button from 'react-bootstrap/Button';

import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const HotelCartlist = ({hotel}) => {
  const {picture,company,balance} = hotel;
    return (
      
        <Col xs={6} md={4} style={{justifyContent:'center',alignItems:'center',marginTop:'15px'}}>
        <Card style={{width:'20rem'}}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Text>
           { company}
          </Card.Text>
         
          <Card.Text>
          { balance}
         </Card.Text>

         <Card.Text>
          <Button>Add</Button>
         </Card.Text>
       
       </Card.Body>
      
      </Card>
      </Col>
   
    );
};

export default HotelCartlist;