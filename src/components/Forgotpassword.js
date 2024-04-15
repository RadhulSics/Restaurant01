import axios from "axios";
import React, { useState } from "react";

function Forgotpassword() {
  const [data, setData] = useState({
    email: "",
    newpassword: "",
    comfirmnewpassword: "",
  });
  const handleChange = (a) => {
    setData({ ...data, [a.target.name]: a.target.value });
  };
  const handleSubmit = (a) => {
    a.preventDefault();
    if (data.newpassword === data.confirmnewpassword) {
      console.log(data);
      axios
        .post("http://localhost:3000/forgotPassword", data)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            alert(res.data.msg);
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Password and Confirm password must be same");
    }
  };

  return (
    <div class="forgotpasswordmaindiv">
      <div
        class="form-control d-flex mx-auto "
        style={{
          width: "30rem",
          height: "30rem",
          marginLeft: "35rem",
          backgroundColor: "lightgray",
        }}
      >
        <form onSubmit={handleSubmit}>
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
              Customer Reset Password
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
              style={{ marginLeft: "1rem", color: "black" }}
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
              style={{ marginLeft: "1rem", color: "black" }}
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
              backgroundColor: "Red",
              marginLeft: "10rem",
              color: "black",
            }}
          >
            Change
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;
