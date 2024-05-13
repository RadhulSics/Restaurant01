import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function ViewOrderDetails({ userId }) {
  const [orders, setOrders] = useState([ ]);
  

  useEffect(() => {
    const fetchOrderDetails = async () => {
      let custid = localStorage.getItem("custId");
      try {
        const response = await axios.get(
          `http://localhost:5000/viewOrderDetails/"${custid}`
        );
        setOrders(response.data.result);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, []); 

  

  return (
    <div>
      <h2>Order Details</h2>
      { orders.length === 0 ? (
        <h2 className="mt-5 mb-3 me-4 text-center fs-3 fw-semibold">
          Your Order is Empty
        </h2>
      ) : (
        <ul
        style={{ listStyleType: "none", width: "48rem" }}
        className="p-5 pt-0 mx-auto"
        >
          {orders.map((order) => (
            <li className="d-flex shadow-lg p-3 bg-body-tertiary rounded mb-4 container-fluid" key={order._id}>
              <p>Food: {order.foodid.foodname}</p>
              <p>Price: ₹{order.foodid.price}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Delivery Address: {order.deliveryAddress}</p>
           
            </li>
          ))}
          <div className="text-center mt-2">
            <Link to="/Customerviewmenu" className="btn btn-danger">
              Close
            </Link>
          </div>
        </ul>
        
      )}
      
    </div>
  );
}

export default ViewOrderDetails;
