import React, { useState } from "react";

import food1 from "../Assests/restuarant.jpeg";
import food2 from "../Assests/rest3.jpg";
import food3 from "../Assests/rest4.jpg";
function Restaurantgallery() {
  
  // const [card, setCard] = useState({});
  return (
    <div> 
      <img src={food1} style={{ width: "100rem" }} alt="food1"></img>
      
      <div class="food2">
        <img src={food2} style={{ width: "100rem",position:"relative"}} alt="food2"></img>
      </div>
      <div class="food3">
        <img src={food3} style={{ width: "100rem",position:"relative"}} alt="food3"></img>
      </div>
    </div>
  );
}

export default Restaurantgallery;
