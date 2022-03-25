import React, {useEffect, useState} from "react";
import RoomPanel from "./RoomPanel";

const RoomsContainer = ({id}) => {
    const [roomsData,setRoomsData] = useState([])
    const roomUrl = `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch(roomUrl);
                const jsonRes = await response.json();
                setRoomsData(jsonRes.rooms);
                console.log(jsonRes.rooms)
            }catch (e) {
                console.error("Error occurred while fetching rooms \n",e)
            }
        }
        fetchData()
    },[])

  return (
      <div className={"rooms-container"}>
          {roomsData.map((room) => {
              return <RoomPanel
                  key={room.id}
                  name={room.name}
                  description={room.longDescription}
                  occupancy={room.occupancy}
              />
          })}
      </div>
  )
}

export default RoomsContainer