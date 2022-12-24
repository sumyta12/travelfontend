import React from 'react';
import Featured from '../../Component/Featured/Featured';
import Header from '../../Component/Header/Header';
import HotelCardContainer from '../../Component/HotelCardContainer/HotelCardContainer';
import Navigatonbar from '../../Component/navbar/Navigatonbar';
import './Home.css'
const Home = () => {
    return (
        <div>
           <Navigatonbar />
           <Header />
           <Featured />
           <HotelCardContainer />
        </div>
    );
};

export default Home;