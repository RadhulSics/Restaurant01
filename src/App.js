// import logo from './logo.svg';
// import './App.css';
import React from 'react';

import Forgotpassword from './components/Forgotpassword';
import './components/Forgotpassword.css'
import {BrowserRouter,Route,Routes} from"react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

      <Route path='/Forgotpassword'element={<Forgotpassword/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Forgotpassword/> */}

       
    
  
    </div>
  );
}

export default App;
