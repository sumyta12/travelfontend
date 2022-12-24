import React from 'react';
import Navigatonbar from '../../Component/navbar/Navigatonbar';
import HotelIMagegridview from './HotelIMagegridview';
import HotelinfoInformation from './HotelinfoInformation';

const Hotel = () => {
    return (
        <div>
           <Navigatonbar />
           <HotelIMagegridview/>
           <HotelinfoInformation />
        </div>
    );
};

export default Hotel;