import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Projectreg from "./components/Projectreg";
import "./components/Projectreg.css";
import Forgotpassword from "./components/Forgotpassword";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Restaurantgallery from "./components/Restaurantgallery";
import Customerviewmenu from './components/Customerviewmenu';
import Nav from "./components/Nav";
import "./components/Nav.css";
import Adlogin from "./components/Adlogin";
import "./components/Adlogin.css";
import Admindashboard from "./components/Admindashboard";
import "./components/Admindashboard.css";
import Adminaddmenu from "./components/Adminaddmenu";
import Customerlogin from "./components/Customerlogin";
import "./components/Customerlogin.css";


import Adminviewmenu from "./components/Adminviewmenu";
import Editfood from "./components/Editfood";
import Editfooddetails from "./components/Editfooddetails";



import StaffRegistration from "./components/StaffRegistration";
import Staffviewfood from './components/Staffviewfood';
import Staffforgotpassword from './components/StaffforgotPassword';
import Staffslogin from "./components/StaffsLogin";
import OrderNow from "./components/OrderNow";
import Payment from "./components/Payment";
import "./components/Payment.css";
import Customerorders from "./components/Customerorders";
function App() {
  return (
   <div className="App">
      <BrowserRouter>
        <Nav />
      
        <Routes>
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          <Route path="/Projectreg" element={<Projectreg />} />        
          <Route path="/" element={<Restaurantgallery />} />
          <Route path="/Restaurantgallery" element={<Restaurantgallery />} />
          <Route path="/Adlogin" element={<Adlogin />} />
          <Route path="/Admindashboard" element={<Admindashboard />} />
          <Route path="/Customerlogin" element={<Customerlogin />} />
          <Route path="/Customerviewmenu" element={<Customerviewmenu />} />
          <Route path="/Adminaddmenu" element={<Adminaddmenu />} />
          <Route path="/Adminviewmenu" element={<Adminviewmenu />} />
          <Route path="/Editfood" element={<Editfood />} />
          <Route path="/Editfooddetails/:id" element={<Editfooddetails />} />
          <Route path="/Ordernow/:id" element={<OrderNow />} />
          <Route path="/Payment" element={<Payment/>} />
  
          <Route path="/StaffsLogin" element={<Staffslogin />} />
          <Route path="/Staffviewfood" element={<Staffviewfood/>}/>
          <Route path="/StaffRegistration" element={<StaffRegistration />} />
          <Route path="/Staffforgotpassword" element={<Staffforgotpassword/>}/>
          <Route path="/Customerorders" element={<Customerorders/>}/>
         
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
