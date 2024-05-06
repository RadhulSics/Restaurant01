import React, { useState } from "react";
import axios from "axios";
import {  useLocation,useNavigate } from "react-router-dom";

function Ordernow() {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    userId: "",
    items: location.state ? location.state.items : [],
  });

  const handleChange = (id, quantity) => {
    const updatedItems = order.items.map((item) =>
      item.foodId === id ? { ...item, quantity } : item
    );
    setOrder((prevOrder) => ({ ...prevOrder, items: updatedItems }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/addorder", order);
      console.log(response.data);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleCancel = () => {
    navigate("/Customerviewmenu");
  };

  const totalAmount = order.items.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw", margin: 0 }}>
      <h4 style={{ textAlign: "center" }}>Order Details</h4>
      <form style={{ display: "flex", flexDirection: "column", width: "500px", padding: "20px", border: "1px solid #ddd", borderRadius: "5px" }}>
        {order.items.map((item) => (
          <div key={item.foodId} style={{ marginBottom: "10px" }}>
            <h4>Food: {item.foodName}</h4>
            <h4>Price per item: ₹{item.price}</h4>
            <label htmlFor={`quantity_${item.foodId}`}>Quantity:</label>
            <input
              type="number"
              id={`quantity_${item.foodId}`}
              name={`quantity_${item.foodId}`}
              value={item.quantity}
              onChange={(e) => handleChange(item.foodId, parseInt(e.target.value))}
            />
          </div>
        ))}
        <h3>Total Amount: ₹{totalAmount}</h3>
        <button type="submit"  onSubmit={handleSubmit} style={{ backgroundColor: "green", color: "white", padding: "5px 10px", fontSize: "12px" }}>
          PAY NOW
        </button>
        <button type="button" onClick={handleCancel} style={{ backgroundColor: "red", color: "white", padding: "5px 10px", fontSize: "12px", marginTop: "10px" }}>
          CANCEL
        </button>
      </form>
    </div>
  );
}

export default Ordernow;
