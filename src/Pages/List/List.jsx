import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Headernav from '../../Component/Header/Headernav';
import Listleftsitedesgin from '../../Component/Listdesgin/Listleftsitedesgin';
import Navigatonbar from '../../Component/navbar/Navigatonbar';

const List = () => {
    const location = useLocation();

   const [destination , setdestination] = useState(location.state.destination);
    const [date , setdate] = useState(location.state.date);
    const [option , setoption] = useState(location.state.option);
   
    return (
        <>
        <div  className="raw_css_navbody">
            <Navigatonbar />
            <Headernav />
          
        </div>
        <h1 style={{marginTop:'30px'}}></h1>
        <div>
        <Listleftsitedesgin 
        
        destination={destination} 
        setdate={setdate}
        date={date} 
        option={option}/>

        </div>
        </>


    );
};

export default List;