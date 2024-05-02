import React from "react";

import food1 from "../Assests/restuarant.jpeg";
import food2 from "../Assests/rest3.jpg";
import food3 from "../Assests/rest4.jpg";
function Restaurantgallery() {

  return (
    <div>
    <div style={{ position: "relative" }}>
    <img src={food1} style={{ width: "100%", height: "auto" }} alt="food1" />
    <div
    
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "white",
        fontSize: "7rem",
        fontWeight: "italic",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      }}
    >
      WELCOME TO OUR RESTAURANT
    </div></div>
    <div className="food2">
      <img
        src={food2}
        style={{ width: "100%", height: "auto", position: "relative" }}
        alt="food2"
      />
    </div>
    <div className="food3">
      <img
        src={food3}
        style={{ width: "100%", height: "auto", position: "relative" }}
        alt="food3"
      />
    </div>
  </div>
  );
}

export default Restaurantgallery;
