import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/Nav.css";

function Nav() {
  const navigate = useNavigate();
  let custid = localStorage.getItem("custId");
  let custname = localStorage.getItem("fname");
  let staffid = localStorage.getItem("staffId");
  let staffname = localStorage.getItem("sfname");

  const handleClick = () => {
    localStorage.removeItem("custId");
    localStorage.removeItem("fname");
    alert("You have logged out");
    navigate("/Customerlogin");
    window.location.reload(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("staffId");
    localStorage.removeItem("sfname");
    alert("You have logged out");
    navigate("/stafflogin");
    window.location.reload(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav1">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: "red" }}>
            RESTAURANT PAGE
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/Restaurantgallery"
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "blue" }}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Customerviewmenu"
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "blue" }}
                >
                  MENU
                </Link>
              </li>
            </ul>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Log in
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/StaffsLogin">
                    Staff Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Customerlogin">
                    Customer Login
                  </Link>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                New Registration
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/Projectreg">
                    Customer Registration
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/StaffRegistration">
                    Staff Registration
                  </Link>
                </li>
              </ul>
            </div>

            <ul className="nav justify-content-end mx-5">
              {custid != null ? (
                <>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/vieworders">
                      View Order
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/viewfood">
                      Menu item
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {custname}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" onClick={handleClick}>
                          Log out
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="nav-link active" to="/viewcart">
                      cart
                      {/* <span class="badge text-primary">2</span> */}
                    </Link>
                  </li>
                </>
              ) : staffid != null ? (
                <>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/staffvieworders">
                      View Order
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/staffviewfood">
                      Menu item
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {staffname}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" onClick={handleLogout}>
                          Log out
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit" style={{ color: "blue" }}>
                    Search
                  </button>
                </form>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
