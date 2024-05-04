import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const custid = localStorage.getItem("custId");
  const custname = localStorage.getItem("fname");
  const staffid = localStorage.getItem("staffId");
  const staffname = localStorage.getItem("sfname");

  const handleCustomerLogout = () => {
    localStorage.removeItem("custId");
    localStorage.removeItem("fname");
    alert("You have logged out");
    navigate("/Customerlogin");
    window.location.reload(false);
  };

  const handleStaffLogout = () => {
    localStorage.removeItem("staffId");
    localStorage.removeItem("sfname");
    alert("You have logged out");
    navigate("/stafflogin");
    window.location.reload(false);
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "blue" }}>
            UDHITH AND Co. RESTAURANT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {custid ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="">
                      View Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Customerviewmenu">
                      Menu Items
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {custname}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" onClick={handleCustomerLogout}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/Viewcart">
                      Cart <span className="badge bg-primary">2</span>
                    </Link>
                  </li>
                </>
              ) : staffid ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/staffvieworders">
                      View Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/staffviewfood">
                      Menu Items
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {staffname}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" onClick={handleStaffLogout}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Restaurantgallery">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Registration
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" to="/Projectreg">
                          Customer
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/StaffRegistration">
                          Staff
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Login
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" to="/StaffsLogin">
                          Staff
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Customerlogin">
                          Customer
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
