import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Customerlogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function Change(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:5000/customerlogin",
        data
      );
      console.log(result.data);
      if (result.data.status === 200) {
        alert("Login successful");
        localStorage.setItem("custId", result.data.data._id);
        localStorage.setItem("fname", result.data.data.firstname);
        navigate("/Customerviewmenu");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed. Please try again.");
    }
  }

  return (
    <div className="customerlogin" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="form-control" style={{ width: "30rem", backgroundColor: "lightgray", padding: "20px", borderRadius: "5px" }}>
        <form onSubmit={submit}>
          <h1 className="text-center" style={{ color: "black", textDecoration: "none" }}>LOG IN</h1>
          <div className="d-flex">
            <label className="form-label mt-2 w-50" style={{ color: "black" }}>Email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Enter your valid email"
              onChange={Change}
              style={{ marginLeft: "1rem" }}
              required
            />
          </div>
          <br />
          <div className="d-flex">
            <label className="form-label mt-2 w-50" style={{ color: "black" }}>Password:</label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={Change}
              style={{ marginLeft: "1rem" }}
              required
            />
          </div>
          <br />
          <br />
          <button type="submit" style={{ backgroundColor: "Red", color: "black", marginLeft: "8.5rem" }}>Log in</button>
          <br />
          <p style={{ marginLeft: "7.5rem" }}>
            <a href="/Forgotpassword">Forgot your Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Customerlogin;
