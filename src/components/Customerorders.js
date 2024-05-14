
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const Customerorders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/viewCustomerOrders");
      setOrders(response.data.result);
    } catch (error) {
      console.error('Failed to fetch orders', error);
    }
  };

  return (
    <Container>
      <h1 className="title">Customer Orders</h1>
      <div>
        {orders.map(order => (
          <div className="order-container" key={order._id}>
            <div className="order-details">
              <p className="customer-name">Customer Name: {order.userId.firstname} {order.userId.lastname}</p>
              <p>Delivery Address: {order.deliveryAddress}</p>
              <p>Food Name: {order.foodid ? order.foodid.foodname : "N/A"}</p>
              <p>Quantity: <span className="quantity">{order.quantity}</span></p>
              <p>Amount: <span className="amount">₹{order.amount}</span></p>
              <p className={`payment-status ${order.paymentstatus ? 'paid' : 'pending'}`}>Payment Status: {order.paymentstatus ? 'Paid' : 'Pending'}</p>
              <p>Order ID: {order._id}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Customerorders;


