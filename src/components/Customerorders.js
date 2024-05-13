import React, { useEffect, useState } from "react";
import axios from "axios";

function Customerorders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/viewCustomerOrders");
        setOrders(response.data.result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container">
      <h1>Customer Orders</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <p>Delivery Address: {order.deliveryAddress}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Amount: {order.amount}</p>
              <p>User ID: {order.userId}</p>
              <p>Food ID: {order.foodid}</p>
              <p>Payment Status: {order.paymentstatus ? "Paid" : "Pending"}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
}

export default Customerorders;
