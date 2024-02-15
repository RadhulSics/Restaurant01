import React from 'react';

import Projectreg from "./components/Projectreg";
import "./components/Projectreg.css";

import Forgotpassword from './components/Forgotpassword';
import './components/Forgotpassword.css'
import {BrowserRouter,Route,Routes} from"react-router-dom";
import Restaurantgallery from './components/Restaurantgallery';





function App() {
  return (
    <div className="App">

      

      <BrowserRouter>
      <Routes>
        <Route path='/Forgotpassword'element={<Forgotpassword/>}/>
        <Route path='/Projectreg'element={<Projectreg/>}/>
        <Route path='/Restaurantgallery'element={<Restaurantgallery/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
