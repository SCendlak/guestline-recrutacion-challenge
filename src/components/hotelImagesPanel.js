import React, {useEffect, useState} from "react";

const HotelImagesPanel = ({imagesObject}) => {
    const [index,setIndex] = useState(0)
    const [src,setSrc] = useState("")
    const [alt,setAlt] = useState("")
    useEffect(()=>{
        setSrc(imagesObject[index].url)
        if (imagesObject[index].alt){
            setAlt(imagesObject[index].alt)
        }else {
            setAlt("")
        }
    },[index])

    const handlePrevIndex = () => {
      if(index===0){
          setIndex(imagesObject.length-1)
      }else {
          setIndex(index-1)
      }
    }

    const handleNextIndex = () => {
      if(index===imagesObject.length-1){
          setIndex(0)
      }else {
          setIndex(index+1)
      }
    }
  return(
      <div className={'hotel-images-panel'}>
          <button onClick={handlePrevIndex}>PREV</button>
          <img src={src} alt={alt}/>
          <button onClick={handleNextIndex}>NEXT</button>
      </div>
  )
}

export default HotelImagesPanel