import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Staffviewfood() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.post("http://localhost:5000/viewmenu");
        setState(response.data.result);
      } catch (error) {
        console.error("Error fetching food:", error);
      }
    };

    fetchFood();
  }, []);

  return (
    <div className="m-4">
      <h1>MENU ITEM</h1>
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
                  <div>
                    <h4 className="mb-2">
                      Price: {"\u20B9"}
                      {x.amount ? x.amount : x.price}
                    </h4>
                  </div>
                  <Link to={{ pathname: "/OrderNow", state: { x: x } }}>
                    <button type="button" className="btn btn-primary">
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Staffviewfood;
