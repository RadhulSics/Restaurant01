import React, { useState } from "react";
import axios from 'axios'
function Forgotpassword() {
  const [Data, setData] = useState({
    email: "",
    newpassword: "",
    confirmnewpassword: "",
  });

  const handleChange = (a) => {
    setData({ ...Data, [a.target.name]: a.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Data.newpassword !== Data.confirmnewpassword) {
      alert("Password and Confirm password must be same");
    } else {
      axios
        .post("http://localhost:3500/forgotPassword", Data)
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
    }
  };
  return (
    <div className="mb-5">
      <form>
        <div
          className="form-control mx-auto d-block "
          style={{
            width: "25rem",
            marginTop: "7rem",
            backgroundColor: "lightblue",
          }}
        >
          <div className="p-2 w-100">
            {" "}
            <h2 className="text-center mt-3 mb-3" style={{color:"black"}}>Customer Reset Password</h2>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2" style={{ width: "9rem" }}>
              Email:
            </label>
            <input
              className="form-control "
              style={{ width: "13rem" }}
              name="email"
              placeholder="Enter Username"
              type="email"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2" style={{ width: "9rem" }}>
               Enter New Password:
            </label>
            <input
              className="form-control "
              style={{ width: "13rem" }}
              name="newpassword"
              placeholder="Enter Password"
              type="password"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2" style={{ width: "9rem" }}>
              Confirm New Password:
            </label>
            <input
              className="form-control "
              style={{ width: "13rem" }}
              name="confirmnewpassword"
              placeholder="Re-enter the Password"
              type="password"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="text-center mt-3 mb-3">
            <button className="w-25 btn btn-primary" onClick={handleSubmit}>
              Change
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Forgotpassword;
