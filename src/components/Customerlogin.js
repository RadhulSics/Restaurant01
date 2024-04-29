import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Customerlogin() {
  const navigate=useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function Change(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  
  async function submit(e) {
    e.preventDefault();
    const result = await axios.post(
      "http://localhost:3000/customerlogin",
      data
    );
    console.log(result);
    if (result.data.status === 200) {
      alert("Login successful");
      console.log("user data",result.data.data);
      localStorage.setItem('userid',result.data.data._id)
      navigate('/Viewfood')
    } else {
      alert("Login failed");
    }
    console.log("result", result);
  }

  return (
    <div class="customerlogin ">
      <div
        class="form-control d-flex mx-auto "
        style={{
          width: "30rem",
          height: "22rem",
          marginLeft: "35rem",
          marginTop:"3rem",
          backgroundColor: "lightgray",

        }}
      >
        <form onSubmit={submit}>
          <div class="p-2 w-100">
            {" "}
            <h2
              class="text-center mt-3 mb-3"
              style={{
                marginLeft: "3rem",
                marginTop: "1.5rem",
                color: "black",
              }}
            >
              LOG IN
            </h2>
          </div>

          <div class="d-flex p-2">
            <label
              class="form-label mt-2 w-50"
              style={{ marginLeft: "1rem", color: "black" }}
            >
              Email:
            </label>
            <input
              class="form-control"
              type="email"
              name="email"
              placeholder="Enter your valid email"
              onChange={Change}
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "5rem",
              }}
              required
            ></input>
          </div>
          <br />
          <div class="d-flex p-2">
            <label
              class="form-label mt-2 w-50"
              style={{ marginLeft: "1rem", color: "black" }}
            >
              Password:
            </label>
            <input
              class="form-control"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={Change}
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "5rem",
              }}
              required
            ></input>
          </div>
          <br />

          <br />
          <button
            style={{
              backgroundColor: "Red",
              marginLeft: "13rem",
              color: "black",
            }}
          >
            Log in
          </button>
          <br />
          <p style={{ marginLeft: "10rem" }}>
            <a href="/Forgotpassword">Forgot your Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Customerlogin;
