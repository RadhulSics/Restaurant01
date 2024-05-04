import React, { useEffect, useState } from "react";
import axios from "axios";

function Staffviewfood() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchFood();
  }, []);

  const fetchFood = async () => {
    try {
      const response = await axios.get("http://localhost:5000/Customerviewmenu");
      setState(response.data.result);
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  return (
    <div className="m-4">
      <h1>MENU ITEMS</h1>
      <ul style={{ listStyleType: "none" }} className="p-3">
        {state.map((x) => (
          <li key={x._id} className="m-3 p-4 d-inline-flex">
            <div className="shadow-lg p-3 bg-body-tertiary rounded">
              <img
                src={`http://localhost:5000/${x.image}`}
                className="img-fluid"
                alt="..."
                style={{ width: "15rem", height: "15rem" }}
              />
              <div>
                <h4 className="mt-2">{x.foodname}</h4>
                <div>
                  <h5 className="mt-2">{x.category}</h5>
                  <h4 className="mb-2">
                    Price: {"\u20B9"}
                    {x.amount ? x.amount : x.price}
                  </h4>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button type="button" className="btn btn-primary">
        View order
      </button>
    </div>
  );
}

export default Staffviewfood;
