import React, { useState } from "react";
import axios from "axios";

function Ordernow() {
  const [order, setOrder] = useState({
    foodId: "", // Set the selected food ID here
    userId: "", // Set the user ID here
    quantity: 1, // Set the initial quantity
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/addOrder", order);
      console.log(response.data);
      // Handle successful order submission
    } catch (error) {
      console.error("Error placing order:", error);
      // Handle error
    }
  };

  return (
    <div>
      <h1>Order Now</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="foodId">Food ID:</label>
          <input
            type="text"
            id="foodId"
            name="foodId"
            value={order.foodId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={order.userId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={order.quantity}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Ordernow;
