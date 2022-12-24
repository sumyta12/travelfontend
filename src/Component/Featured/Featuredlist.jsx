import React from 'react';
import Card from 'react-bootstrap/Card';
const Featuredlist = ({ listitem }) => {
    const {picture,name,company} = listitem;
    
    return (
        <Card className="text-white mt-5">
        <Card.Img src={picture} alt={name} style={{ width: '18rem',height:'200px' }} />
        <Card.ImgOverlay>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          {company}
          </Card.Text>
         </Card.ImgOverlay>
      </Card>
    );
};

export default Featuredlist;