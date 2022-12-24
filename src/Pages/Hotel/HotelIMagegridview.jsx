import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HotelIMagegridview = () => {
    const image = [
        {
            "_id": "639758bb9e458a527513385c",
           
            "picture": "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {  
            "_id": "639338bb9e458a527513385c",
            
            "picture": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
           },
           {  
            "_id": "6393345b9e458a527513385c",
            
            "picture": "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=600",
           }
    ]
     
  return (
    <Container>
      <Row >
      <Col xs={6} md={4} className="p-5">
       {
        image.map(pic =>
          (  <Col key={pic._id} >
             <img  src={pic.picture} style={{width:'100%'}}/>
             </Col>)
        )
       }
   
        </Col>
        <Col xs={12} md={8} className="pt-5">
        <img src='https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=600' style={{width:'100%'}}/>
        </Col>
        
      </Row>
    </Container>
  );
};

export default HotelIMagegridview;
