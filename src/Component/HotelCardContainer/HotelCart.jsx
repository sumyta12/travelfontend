import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HotelCartlist from './HotelCartlist';
import './Hotel.css'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import UseHotelcarddisplay from '../Hooks/HotelcardDisplay/UseHotelcarddisplay';
const HotelCart = () => {
    const [hotelist,sethotelist] = UseHotelcarddisplay();
    //add dependencies
    return (
        <Container className='mt-5'>
        <Row >
            {
                hotelist.map(hotels => <HotelCartlist key={hotels._id} hotel={hotels}/>)
            }
            </Row>
        </Container>
    );
};

export default HotelCart;