import React from "react";
import HotelContainer from "./HotelContainer"


const HotelsList = ({hotels}) => {
    return(
        <div className={"hotels-list"}>
            {hotels.map((hotelObject,key) => {
                return <HotelContainer  key={key} hotel={hotelObject}/>
            })}
        </div>
    )
}

export default HotelsList;