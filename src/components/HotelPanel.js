import React from "react";
import HotelImagesPanel from "./hotelImagesPanel";

const HotelPanel = ({name,imagesUrl,rating,address1,address2,town, postcode}) => {
  return(
      <div className={"hotel-panel"}>
          <h2>{name ? name : " -"}</h2>
          <HotelImagesPanel imagesObject={imagesUrl} />
          <h5>{rating ? `Stars ${rating}` : " -"}</h5>
          <h4>{address1 === "" ? "Address 1: -" : `Address 1: ${address1}, ${town} ${postcode}`}</h4>
          <h4>{address2 === "" ? "Address 2: -" : `Address 2: ${address2}, ${town} ${postcode}`}</h4>
      </div>
  )
}

export default HotelPanel;