// import logo from './logo.svg';
// import './App.css';
import React from 'react';

import Projectreg from "./components/Projectreg";
import "./components/Projectreg.css";

import Forgotpassword from './components/Forgotpassword';
import './components/Forgotpassword.css'
import {BrowserRouter,Route,Routes} from"react-router-dom";



>>>>>>>>> Temporary merge branch 2

function App() {
  return (
    <div className="App">
<<<<<<<<< Temporary merge branch 1
      <Projectreg/>
=========
      <BrowserRouter>
      <Routes>
        <Route path='/Forgotpassword'element={<Forgotpassword/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Forgotpassword/> */}

       
>>>>>>>>> Temporary merge branch 2
    
  
    </div>
  );
}

export default App;
