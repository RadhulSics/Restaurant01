import React from "react";
import menu1 from "../Assests/menu1.jpg";
import menu2 from "../Assests/menu2.jpg";
import menu3 from "../Assests/menu3.jpg";
import menu4 from "../Assests/menu4.jpg";
import menu5 from "../Assests/menu5.jpg";
import menu6 from "../Assests/menu6.jpg";
function Customerviewmenu() {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={menu1}
              style={{ width: "25rem", height: "23rem", position: "relative" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Noodles</h5>
              <p class="card-text">Rs:160</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={menu2}
              style={{ width: "25rem", height: "23rem", position: "relative" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Burger</h5>
              <p class="card-text">Rs:200</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={menu3}
              style={{ width: "25rem", height: "23rem", position: "relative" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Chicken Biriyani</h5>
              <p class="card-text">Rs:180</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={menu4}
              style={{ width: "25rem", height: "23rem", position: "relative" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Alfah Mandi</h5>
              <p class="card-text">Rs:820(full)</p>
              <p class="card-text">Rs:430(half)</p>
              <p class="card-text">Rs:220(quater)</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={menu5}
              style={{ width: "25rem", height: "23rem", position: "relative" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Porotta & Beef (Combo)</h5>
              <p class="card-text">Rs:100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={menu6}
              style={{ width: "25rem", height: "23rem", position: "relative" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Beef Biriyani</h5>
              <p class="card-text">Rs:200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customerviewmenu;
