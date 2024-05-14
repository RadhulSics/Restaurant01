// StaffOrderDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';

const Stafforders= () => {
  const [staffOrders, setStaffOrders] = useState([]);

  useEffect(() => {
    fetchStaffOrders();
  }, []);

  const fetchStaffOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/viewallstafforder");
      setStaffOrders(response.data.result);
    } catch (error) {
      console.error('Failed to fetch staff orders', error);
    }
  };

  return (
    <Container>
      <h1>Staff Order Details</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Food Name</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {staffOrders.map(order => (
            <tr key={order._id}>
              <td>{order.customername}</td>
              <td>{order.foodid.foodname}</td>
              <td>{order.count}</td>
              <td>{new Date(order.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Stafforders;
