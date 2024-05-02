import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Admindashboard from "./Admindashboard";
function Editfood() {
  const [state, setState] = useState([]);
  const fetchFood = async () => {
    const response = await axios.get("http://localhost:5000/viewmenu");
    console.log(response.data.result);
    setState(response.data.result);
  };
  useEffect(() => {
    fetchFood();
  }, []);

  const handleClick = (id) => {
    axios
      .post(`http://localhost:5000/deletefood/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          window.location.reload(false);
        } else {
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0 0 200px", backgroundColor: "#f0f0f0" }}>
        <Admindashboard />
      </div>
    <div className="m-4">
      <ul style={{ listStyleType: "none" }} className="p-3">
        {state.map((x) => (
          <li key={x._id} className="m-3 p-4 d-inline-flex ">
            <div className="shadow-lg p-3 bg-body-tertiary rounded">
              <img
                src={`http://localhost:5000/${x.image}`}
                className="img-fluid"
                alt="..."
                style={{ width: "30rem", height: "30rem" }}
              />
              <div>
                <h4 className="mt-2">{x.foodname}</h4>
                <h4 className="mt-2">{x.category}</h4>
                <h4 className="mb-2">
                  Price: {"\u20B9"}
                  {x.price}
                </h4>
                <div>
                <Link to={`/editfooddetails/${x._id}`}>
                    <button className="btn btn-primary me-5">Edit item</button>
                  </Link>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleClick(x._id)}
                  >
                    Delete item
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Editfood;
