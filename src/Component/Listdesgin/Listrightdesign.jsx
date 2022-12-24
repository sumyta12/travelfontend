import React from "react";
import UseHotelcarddisplay from "../Hooks/HotelcardDisplay/UseHotelcarddisplay";
import Listalldisplaydesign from "./Listalldisplaydesign";

const Listrightdesign = () => {
  const [hotelist, sethotelist] = UseHotelcarddisplay();

  return (
    <div>
      {hotelist.map((hotel) => (
        <Listalldisplaydesign key={hotel._id} hotels={hotel} />
      ))}
    </div>
  );
};

export default Listrightdesign;
