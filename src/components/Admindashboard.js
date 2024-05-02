import React from 'react'
import { Link } from "react-router-dom";
function Admindashboard() {
  return (
      <div style={{ display: 'flex', flexDirection: 'column',height:"100rem", width: '200px', backgroundColor: '#f0f0f0'}}>
      <h2>ADMIN</h2>
      <a href="/Adminaddmenu" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>ADD MENU</a>
      <a href="/Adminviewmenu" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>VIEW MENU</a>
      <a href="/Editfood" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>EDIT FOOD</a>
      <ul className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                View Orders
              </a>
              <ul className="dropdown-menu">
                <ul>
                  <Link className="dropdown-item" to="/admin/viewcustomerorder">
                    Customer Orders
                  </Link>
                </ul>
                <ul>
                  <Link className="dropdown-item" to="/admin/viewstafforder">
                    Staff Orders
                  </Link>
                </ul>
              </ul>
            </ul>
 
     </div>
     
  )
}

export default Admindashboard

