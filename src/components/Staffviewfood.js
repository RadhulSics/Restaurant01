import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Staffviewfood() {
  const [state, setState] = useState([]);
  const navigate = useNavigate();

  const fetchFood = async () => {
    try {
      const response = await axios.post("http://localhost:5000/viewmenu");
      setState(response.data.result);
    } catch (error) {
      console.error("Error fetching food:", error);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  const handleClick = (id, foodName, price) => {
    const items = [{
      foodId: id,
      foodName: foodName,
      price: price,
      quantity: 1
    }];
    navigate(`/ConfirmOrder/${id}`, { state: { items } });
  };

  return (
    <div className="m-4">
      <ul style={{ listStyleType: "none" }} className="p-3">
        {state.map((x) => (
          <li key={x?._id} className="m-3 p-4 d-inline-flex">
            {x && (
              <div className="shadow-lg p-3 bg-body-tertiary rounded">
                <img
                  src={`http://localhost:5000/${x.image}`}
                  className="img-fluid"
                  alt="..."
                  style={{ width: "15rem", height: "15rem" }}
                />
                <div>
                  <h4 className="mt-2">{x.foodname}</h4>
                  <h4 className="mb-2">
                    Price: {"\u20B9"}
                    {x.amount ? x.amount : x.price}
                  </h4>
                </div>
                <button
                  className="btn btn-green"
                  onClick={() => handleClick(x._id, x.foodname, x.amount ? x.amount : x.price)}
                >
                   Place Order 
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}



export default Staffviewfood;
