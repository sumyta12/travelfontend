import axios from 'axios';
import  { useEffect, useState } from 'react';

const UseHotelcarddisplay = () => {
    const [hotelist,sethotelist] = useState([]);
     useEffect(()=>{
       const canceltoken = axios.CancelToken.source(); 
       axios.get(`./fakehoteldata.json`,{cancelToken: canceltoken.token})
       .then(res => sethotelist(res.data))
       .catch(err =>{
         //console.log(err.message)
       })
  
       return () =>{
        canceltoken.cancel();
       }

    },[])
    return [hotelist,sethotelist];
};

export default UseHotelcarddisplay;