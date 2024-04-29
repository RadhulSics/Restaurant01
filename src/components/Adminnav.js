import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Adminnav() {
  const navigate = useNavigate();
  let adminid = localStorage.getItem("admin");

  const handlelogout = () => {
    adminid = localStorage.removeItem("admin");
    alert("Admin logged out");
    navigate("/");
    window.location.reload(false);
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Admin DashBoard
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
          <ul className="nav justify-content-end mx-5">
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/admin/Home">
                Home
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
                vieworders
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/admin/viewcustomerorder">
                    Customer Orders
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admin/viewstafforder">
                    Staff Orders
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu item
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/admin/addfood">
                    Add food
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admin/viewmenu">
                    Viewfood
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admin/editmenu">
                    Edit food
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" onClick={handlelogout}>
                    Log out
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Adminnav;
