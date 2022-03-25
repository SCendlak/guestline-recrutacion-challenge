import '../css/App.css';
import InputBar from "./InputBar";
import HotelsList from "./HotelsList";
import {useEffect, useState} from "react";

function App() {
    const [hotelData,setHotelData] = useState([]);
    const dburl = 'https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG'


    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch(dburl);
                const responseJson = await response.json();
                setHotelData(responseJson)
                console.log(responseJson)
            }catch (err){
                console.error("Error occurred while fetching data from db \n",err)
            }
        };
        fetchData();
    },[])

  return (
    <div className="App">
      <InputBar/>
      <HotelsList hotels = {hotelData}/>
    </div>
  );
}

export default App;
