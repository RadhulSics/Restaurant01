import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Projectreg from "./components/Projectreg";
import "./components/Projectreg.css";
import Forgotpassword from './components/Forgotpassword';
import './components/Forgotpassword.css'
import {BrowserRouter,Route,Routes} from"react-router-dom";
import Restaurantgallery from './components/Restaurantgallery';
import Adminlogin from './components/Adminlogin';
import './components/Adminlogin.css';
function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
        <Route path='/Forgotpassword'element={<Forgotpassword/>}/>
        <Route path='/Projectreg'element={<Projectreg/>}/>
        <Route path='/Restaurantgallery'element={<Restaurantgallery/>}/>
        <Route path='/Adminlogin'element={<Adminlogin/>}/>
        
      </Routes>
      </BrowserRouter>
      

       
    
  
    </div>
  );
}

export default App;
