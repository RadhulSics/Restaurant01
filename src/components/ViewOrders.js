import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewOrders() {
  const [state, setState] = useState([]);
  let custid = localStorage.getItem("custId");

  const fetchorder = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/viewOrderDetails/${custid}`
      );
      console.log(response.data.result);
      setState(response.data.result);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  useEffect(() => {
    fetchorder();
  }, []);

  return (
    <div className="mt-5">
      {state.length > 0 ? (
        <ul
          style={{ listStyleType: "none", width: "48rem" }}
          className="p-5 pt-0 mx-auto"
        >
          {state.map((x) => (
            <li
              key={x._id}
              className="d-flex shadow-lg p-3 bg-body-tertiary rounded mb-4 container-fluid"
            >
              <img
                src={x.foodid ? `http://localhost:5000/${x.foodid.image}` : ""}
                className="img-fluid me-4"
                alt="..."
                style={{ width: "8rem", height: "8rem" }}
              />

              <div className="ms-3">
              <h3 className="mt-2 ms-3">{x.foodid ? x.foodid.foodname : ""}</h3>

                <div className="d-flex mt-5 ms-3">
                  <h5 className="me-5">
                    Food price:{" "}
                    <span className="ms-1">
                      {"\u20B9"} {x.quantity * x.amount}
                    </span>
                  </h5>
                </div>
              </div>
              <div className="mt-3 ms-2">
                <h5>
                  Date:{" "}
                  <span>
                    {x.date &&
                      x.date.slice(0, 10).split("-").reverse().join("/")}
                  </span>
                </h5>
                <h5 className="me-5 mt-5">
                  Quantity: <span className="ms-1">{x.quantity}</span>
                </h5>
              </div>
            </li>
          ))}
          <div className="text-center mt-2">
            <Link to="/Customerviewmenu" className="btn btn-danger">
              Close
            </Link>
          </div>
        </ul>
      ) : (
        <h2 className="mt-5 mb-3 me-4 text-center fs-3 fw-semibold">
          Your Order is Empty
        </h2>
      )}
    </div>
  );
}

export default ViewOrders;
