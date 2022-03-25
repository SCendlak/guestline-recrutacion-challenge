import React from "react";
import HotelPanel from "./HotelPanel";
import RoomsContainer from "./RoomsContainer";

const HotelContainer = ({hotel}) => {
  return(
      <div className={"hotel-container"}>
          <HotelPanel
              key={hotel.id}
              name={hotel.name}
              imagesUrl = {hotel.images}
              rating = {hotel.starRating}
              address1={hotel.address1}
              address2={hotel.address2}
              town={hotel.town}
              postcode={hotel.postcode}
          />
          <RoomsContainer id={hotel.id}/>
      </div>
  )
}

export default HotelContainer;