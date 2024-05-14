import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StaffviewOrder() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const staffid=localStorage.getItem("staffId")

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:5000/stafforderdetails/${staffid}'); 
                setOrders(response.data.data); 
            } catch (error) {
                console.error('Error fetching orders:', error);
                
            }
        };

        fetchOrders();
    }, []);
    


return (
    <div>
        <h1>Confirmed Orders</h1>
        {orders.length > 0 ? (
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        <h3>Customer: {order.customername}</h3>
                        <h4>Date: {order.date.toLocaleDateString()}</h4>  {/* Assuming date is a Date object */}
                        <table>
                            <thead>
                                <tr>
                                    <th>Food Name</th>
                                    <th>Quantity</th>
                                    <th>Price per Item</th>
                                    <th>Total Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.foodItems.map((foodItem) => ( // Assuming nested foodItems array
                                    <tr key={foodItem.id}>
                                        <td>{foodItem.foodname}</td>
                                        <td>{foodItem.quantity}</td>
                                        <td>₹{foodItem.price}</td>
                                        <td>₹{foodItem.price * foodItem.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No confirmed orders yet.</p>
        )}
    </div>
);
}


export default StaffviewOrder;
