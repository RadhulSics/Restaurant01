import React from "react";
import "../components/Nav.css"
import { Link } from "react-router-dom";
function Nav() {

  // const handleClick = () => {
  //   custid = localStorage.removeItem("custId");
  //   custname = localStorage.removeItem("fname");
  //   alert("You have logged out");
  //   navigate("/Customerlogin");
  //   window.location.reload(false);
  // };

  // const handlelogout = () => {
  //   staffid = localStorage.removeItem("staffId");
  //   staffname = localStorage.removeItem("sfname");
  //   alert("You have logged out");
  //   navigate("/stafflogin");
  //   window.location.reload(false);
  // };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary " id="nav1" >
        <div class="container-fluid">
          <a class="navbar-brand" style={{color:"red"}}>
            RESTUARANT PAGE
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" >
                <Link
                  to="/Restaurantgallery"
                  class="nav-link active"
                  aria-current="page" style={{color:"blue"}}

                >
                  HOME
                </Link>
              </li>
              
              <li class="nav-item">
                <Link
                  to="/Customerviewmenu"
                  class="nav-link active"
                  aria-current="page"
                  style={{color:"blue"}}
                >
                  MENU
                </Link>
              </li>
              
            </ul>
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Staff
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/StaffsLogin">Staff Login</a></li>
    <li><a class="dropdown-item" href="/StaffRegistration">Staff Registration</a></li>
    
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Customer
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/Customerlogin">Customer Login</a></li>
    <li><a class="dropdown-item" href="/Projectreg">Customer Registration</a></li>
    
  </ul>
</div>
            
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit" style={{color:"blue"}}>
                Search
              </button>
            </form>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;