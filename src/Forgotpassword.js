import React, { useState } from "react";

function Forgotpassword() {
  const [Data, setData] = useState({
    email: "",
    newpassword: "",
    comfirmnewpassword: "",
  });
  const handleChange = (a) => {
    setData({ ...Data, [a.target.name]: a.target.value });
  };
  const handleSubmit = (a) => {
    a.preventDefault();
    console.log(Data);
    if (Data.newpassword !== Data.confirmnewpassword) {
      alert("Password not matched");
    } else {
      alert("Password changed successfully");
    }
  };
  return (
    <div
      class="form-control d-flex mx-auto" 
      style={{
        width: "25rem",
        height: "18rem",
        marginTop: "8rem",
        marginLeft: "32rem",
        backgroundColor: "lightgrey",
      }}
    >
    
      <form onSubmit={handleSubmit}>
        <div class="p-2 w-100">
          {" "}
          <h2
            class="text-center mt-3 mb-3"
            style={{ marginLeft: "3rem", marginTop: "1.5rem", color: "blue" }}
          >
            Customer Reset Password
          </h2>
        </div>

        <div class="d-flex p-2">
          <label
            class="form-label mt-2 w-50"
            style={{ marginLeft: "1rem", color: "blue" }}
          >
            Email:
          </label>
          <input
            class="form-control"
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
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
            style={{ marginLeft: "1rem", color: "blue" }}
          >
            Set New Password:
          </label>
          <input
            class="form-control"
            type="password"
            name="newpassword"
            placeholder="Enter your new password"
            onChange={handleChange}
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
            style={{ marginLeft: "1rem", color: "blue" }}
          >
            Confirm New Password:
          </label>
          <input
            class="form-control"
            type="password"
            name="confirmnewpassword"
            placeholder="Re-enter your new password"
            onChange={handleChange}
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "5rem",
            }}
            required
          ></input>
        </div>
        <br />
        <button
          style={{
            backgroundColor: "primary",
            marginLeft: "10rem",
            color: "blue",
          }}
          
        >
          Change
        </button>
        <br />
      </form>
    </div>
  );
}

export default Forgotpassword;
