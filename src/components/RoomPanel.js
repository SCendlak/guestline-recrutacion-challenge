import React from "react";

const RoomPanel = ({name,description,occupancy}) => {
  return(
      <div className={"room-panel"}>
          <h3>{name}</h3>
          <h5>{description}</h5>
          <h5>Adults:{occupancy.maxAdults}</h5>
          <h5>Childeren:{occupancy.maxChildren}</h5>
      </div>
  )
}

export default RoomPanel;