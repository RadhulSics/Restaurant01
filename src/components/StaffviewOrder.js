import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Staffvieworder() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const staffId = localStorage.getItem("staffid");
                const response = await axios.get(`http://localhost:5000/stafforderdetails/${staffId}`);
                setOrders(response.data.result);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };
        fetchOrders();
    }, []);

    return (
        <div className="mt-5">
            {orders && orders.length > 0 ? (
                <ul style={{ listStyleType: "none", width: "48rem" }} className="p-5 pt-0 mx-auto">
                    {orders.map((order) => (
                        <li key={order._id} className="shadow-lg p-3 bg-body-tertiary rounded mb-4 container-fluid">
                            <h3 className="text-center">Customer name: {order.customername}</h3>
                            <div className="d-flex">
                                <img
                                    src={`http://localhost:5000/${order.foodid.image}`}
                                    className="img-fluid me-4"
                                    alt={order.foodid.foodname}
                                    style={{ width: "8rem", height: "8rem" }}
                                />
                                <div className="ms-3">
                                    <h3 className="mt-2 ms-3">{order.foodid.foodname}</h3>
                                    <div className="d-flex mt-5 ms-3">
                                        <h5 className="me-5">
                                            Food price: {"\u20B9"} {order.count * order.foodid.price}
                                        </h5>
                                    </div>
                                </div>
                                <div className="mt-3 ms-2">
                                    <h5>Date: {order.date.slice(0, 10).split("-").reverse().join("/")}</h5>
                                    <h5 className="me-5 mt-5">Quantity: {order.count}</h5>
                                </div>
                            </div>
                        </li>
                    ))}
                    <div className="text-center mt-2">
                        <Link to="/Staffviewfood" className="btn btn-danger">Close</Link>
                    </div>
                </ul>
            ) : (
                <h2 className="mt-5 mb-3 me-4 text-center fs-3 fw-semibold">Your Order is Empty</h2>
            )}
        </div>
    );
}

export default Staffvieworder;
