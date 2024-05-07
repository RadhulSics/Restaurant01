import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, useParams } from "react-router-dom";

function OrderNow() {
  
  const foodid=useParams()
  const navigate = useNavigate();


  const [food, setFood] = useState({});



  const [order, setOrder] = useState({
    userId: localStorage.getItem("userid"),
    quantity:1,
    
    deliveryAddress: "",
    foodid:foodid.id,
    amount:0
  });
 const fetchFood = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/viewone/${foodid.id}`);
      console.log("food",response);
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
    console.log(food.price,"hju",order.quantity);
    order.amount = parseInt(food.price * order.quantity)
    const result= await axios.post("http://localhost:5000/addOrder",order)
    console.log("result",result);
    console.log("orders",order);

    navigate("/Payment")
    
    
  };

  const handleCancel = () => {
    navigate("/Customerviewmenu");
  };

 
console.log("food id",foodid);
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
        {/* {order.items.map((item) => ( */}
          <div  style={{ marginBottom: "10px" }}>
            <h4>Food: {food.foodname}</h4>
            <h4>Price per item: ₹{food.price}</h4>
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={order.quantity}
              onChange={(e) =>
                handleChange(e)
              }
            />
          </div>
        
        <label htmlFor="deliveryAddress">Delivery Address:</label>
        <input
          type="text"
          id="deliveryAddress"
          name="deliveryAddress"
          value={order.deliveryAddress}
          onChange={(e) =>handleChange(e)}
          required
        />
        <h3>Total Amount: ₹{(parseInt(food.price)*parseInt(order.quantity))}</h3>
        <button
          type="submit"
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "5px 10px",
            fontSize: "12px",
          }}
          onClick={handleSubmit}
        >
          PAY NOW
        </button>

        <button
          type="button"
          onClick={handleCancel}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "5px 10px",
            fontSize: "12px",
            marginTop: "10px",
          }}
        >
          CANCEL
        </button>
      </form>
    </div>
  );
}

export default OrderNow;