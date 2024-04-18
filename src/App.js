import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Projectreg from "./components/Projectreg";
import "./components/Projectreg.css";
import Forgotpassword from './components/Forgotpassword';

import {BrowserRouter,Route,Routes} from"react-router-dom";
import Restaurantgallery from './components/Restaurantgallery';
import Customerviewmenu from './components/Customerviewmenu';
import  Nav from './components/Nav';
import './components/Nav.css';
import Adlogin from './components/Adlogin';
import './components/Adlogin.css';
import Admindashboard from './components/Admindashboard';
import './components/Admindashboard.css';
import Adminaddmenu from './components/Adminaddmenu';
import Customerlogin from './components/Customerlogin';
import './components/Customerlogin.css';
import Customerhomepage from './components/Customerhomepage';

import StaffRegistration from "./components/StaffRegistration";
import Staffslogin from "./components/StaffsLogin";
import Staffviewfood from './components/Staffviewfood';


function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/Forgotpassword'element={<Forgotpassword/>}/>
        <Route path='/Projectreg'element={<Projectreg/>}/>
        <Route path='/Restaurantgallery'element={<Restaurantgallery/>}/>
        <Route path='/Customerviewmenu'element={<Customerviewmenu/>}/>
        <Route path='/Adlogin'element={<Adlogin/>}/>
        <Route path='/Admindashboard'element={<Admindashboard/>}/>
        <Route path='/Adminaddmenu'element={<Adminaddmenu/>}/>
        <Route path='/Customerlogin'element={<Customerlogin/>}/>
        <Route path='/Customerhomepage'element={<Customerhomepage/>}/>
        <Route path='/Adminaddmenu'element={<Adminaddmenu/>}/>
        <Route path="/StaffRegistration" element={<StaffRegistration />} />
        <Route path="/StaffLogin" element={<Staffslogin />} />
        <Route path="/Staffviewfood" element={<Staffviewfood/>}/>

        

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;