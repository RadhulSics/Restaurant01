// import logo from './logo.svg';
// import './App.css';
import React from 'react';

import Projectreg from "./component/Projectreg";
import "./component/Style/Projectreg.css";
import Forgotpassword from './components/Forgotpassword';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/Forgotpassword'element={<Forgotpassword/>}/>
      </Routes>
        </BrowserRouter>
    <Projectreg/>
    
  
    </div>
  );
}

export default App;
