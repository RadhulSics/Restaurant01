import React, { useEffect, useState } from "react";
import axios from "axios";

function Viewfood() {
  const [foods, setFoods] = useState([]);
  const [cartData, setCartData] = useState({
    userId: localStorage.getItem("custId"),
    count: 1,
  });

  const fetchFood = async () => {
    try {
      const response = await axios.get("http://localhost:5000/viewmenu"); // Corrected URL
      setFoods(response.data.result);
    } catch (error) {
      console.error("Error fetching food:", error);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  const handleClick = (id) => {
    axios.post(`http://localhost:5000/addcart/${id}`, cartData)
      .then((res) => {
        if (res.data.status === 200) {
          alert(res.data.message);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.error("Error adding to cart:", err);
      });
  };

  return (
    <div className="m-4">
      <ul style={{ listStyleType: "none" }} className="p-3">
        {foods.map((food) => (
          <li key={food._id} className="m-3 p-4 d-inline-flex">
            <div className="shadow-lg p-3 bg-body-tertiary rounded">
              <img
                src={`http://localhost:5000/${food.image}`}
                className="img-fluid"
                alt="Food"
                style={{ width: "15rem", height: "15rem" }}
              />
              <div>
                <h4 className="mt-2">{food.foodname}</h4>
                <div>
                  <label className="form-label me-4">Quantity:</label>
                  <select
                    name="count"
                    value={cartData.count}
                    onChange={(e) => setCartData({ ...cartData, count: parseInt(e.target.value) })}
                  >
                    {[...Array(10).keys()].map((count) => (
                      <option key={count + 1} value={count + 1}>{count + 1}</option>
                    ))}
                  </select>
                  <h4 className="mb-2">
                    Price: {"\u20B9"}
                    {food.price * cartData.count}
                  </h4>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick(food._id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Viewfood;
