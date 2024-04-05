import React from 'react';

import Projectreg from "./components/Projectreg";
import "./components/Projectreg.css";

import Forgotpassword from './components/Forgotpassword';
import './components/Forgotpassword.css'
import {BrowserRouter,Route,Routes} from"react-router-dom";
import Restaurantgallery from './components/Restaurantgallery';


import Restaurantgallery from "./components/Restaurantgallery";
import Customerviewmenu from "./components/Customerviewmenu.js";


import Customerlogin from "./components/Customerlogin.js";
import "./components/Customerlogin.css";
import Customerhomepage from "./components/Customerhomepage.js";

import Adminaddmenu from "./components/Adminaddmenu.js";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          <Route path="/Projectreg" element={<Projectreg />} />
          <Route path="/Restaurantgallery" element={<Restaurantgallery />} />
          <Route path="/Customerviewmenu" element={<Customerviewmenu />} />
          <Route path="/Customerlogin" element={<Customerlogin />} />
          <Route path="/Customerhomepage" element={<Customerhomepage/>}/>
          <Route path="/Adminaddmenu" element={<Adminaddmenu/>}/>
        </Routes>


      


      <BrowserRouter>
                  <Nav/>

      <Routes>
        <Route path='/Forgotpassword'element={<Forgotpassword/>}/>
        <Route path='/Projectreg'element={<Projectreg/>}/>
        <Route path='/Restaurantgallery'element={<Restaurantgallery/>}/>
          <Route path="/Customerviewmenu"  element={<Customerviewmenu/>}/>

      </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
