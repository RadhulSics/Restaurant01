import React, { useState } from 'react'
import img1 from '../Assests/image1.jpg'
function Restaurantgallery() {
  const[card,setCard]=useState({})
  return (
    <div>
      <img src={img1} />
    </div>
  )
}

export default Restaurantgallery
