import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Featured.css'
import Featuredlist from './Featuredlist';
import Container from 'react-bootstrap/esm/Container';

const Featured = () => {

   const [featureitem,setfeatureitem] = useState([]);

   useEffect(()=>{
   const canceltoken = axios.CancelToken.source();

   axios.get(`./fakedata.json`,{cancelToken: canceltoken.token})
   .then(res => setfeatureitem(res.data))  
    .catch((err)=>{
      
    })   


   return ()=>{
    canceltoken.cancel();
   }
   },[])


    return (
        <Container>
        <div className='displayflex'>
        
        {
          featureitem.map(list => <Featuredlist key={list._id} listitem={list} />)
        }
        
        </div>
        </Container>
    );
};

export default Featured;