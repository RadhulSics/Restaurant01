import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Projectreg from "./components/Projectreg";
import "./components/Projectreg.css";

import Forgotpassword from "./components/Forgotpassword";
import "./components/Forgotpassword.css";


import Restaurantgallery from "./components/Restaurantgallery";
import Customerviewmenu from "./components/Customerviewmenu.js";


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      
      <Nav/>
        <Routes>
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          <Route path="/Projectreg" element={<Projectreg />} />
          <Route path="/Restaurantgallery" element={<Restaurantgallery />} />
          <Route path="/Customerviewmenu"  element={<Customerviewmenu/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
