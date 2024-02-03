// import logo from './logo.svg';
// import './App.css';
import React from 'react';

import Projectreg from "./components/Projectreg";
import "./components/Projectreg.css";

import Forgotpassword from './components/Forgotpassword';
import './components/Forgotpassword.css'
import {BrowserRouter,Route,Routes} from"react-router-dom";





function App() {
  return (
    <div className="App">

      

      <BrowserRouter>
      <Routes>
        <Route path='/Forgotpassword'element={<Forgotpassword/>}/>
        <Route path='/Projectreg'element={<Projectreg/>}/>
      </Routes>
      </BrowserRouter>
     
     

       

    
  
    </div>
  );
}

export default App;
