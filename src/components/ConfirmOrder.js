import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ConfirmOrder() {
  const foodid = useParams();
  const navigate = useNavigate();

  const [food, setFood] = useState({});
  const [order, setOrder] = useState({
    userId: localStorage.getItem("userid"),
    quantity: 1,
    foodid: foodid.id,
    amount: 0,
    customername: "", // Adding customername field
  });

  const fetchFood = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/viewone/${foodid.id}`);
      setFood(response.data.data);
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    order.amount = parseInt(food.price * order.quantity);
    const result = await axios.post("http://localhost:5000/staffaddorder", order);
    console.log("result", result);
    console.log("orders", order);
    alert("Order Confirmed");
  };

  const handleCancel = () => {
    navigate("/Customerviewmenu");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        margin: 0,
      }}
    >
      <h4 style={{ textAlign: "center" }}>Order Details</h4>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      >
        <div className="mb-3">
          <label htmlFor="customername" className="form-label fw-semibold">Customer Name:</label>
          <input
            type="text"
            className="form-control"
            id="customername"
            name="customername"
            placeholder="Enter Customer Name"
            value={order.customername}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <h4>Food: {food.foodname}</h4>
          <h4>Price per item: ₹{food.price}</h4>
          <label>Quantity:</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            value={order.quantity}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <h3>Total Amount: ₹{parseInt(food.price) * parseInt(order.quantity)}</h3>
        <div className="d-grid gap-2 d-md-flex justify-content-md-between">
          <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="btn btn-success">Confirm Order</button>
        </div>
      </form>
    </div>
  );
}

export default ConfirmOrder;
