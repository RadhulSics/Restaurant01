import React, { useEffect, useState } from "react";
import axios from "axios";

function Customerviewmenu() {
  const [state, setState] = useState([]);
  const [cartdata, setCartdata] = useState({
    userid: localStorage.getItem("custId"),
    count: "1",
  });

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

  const handleClick = (id) => {
    axios
      .post(`http://localhost:5000/addcart/${id}`, cartdata)
      .then((res) => {
        if (res.data.status === 200) {
          alert(res.data.msg);
        } else {
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.error("Error adding to cart:", err);
      });
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
                  <div>
                    <label className="form-label me-4">Quantity:</label>
                    <select
                      name="count"
                      onChange={(e) => {
                        const amount = x.price * parseInt(e.target.value);
                        setCartdata({
                          ...cartdata,
                          [e.target.name]: e.target.value,
                        });
                        setState(
                          state.map((item) =>
                            item._id === x._id ? { ...item, amount } : item
                          )
                        );
                      }}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <h4 className="mb-2">
                      Price: {"\u20B9"}
                      {x.amount ? x.amount : x.price}
                    </h4>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleClick(x._id)}
                  >
                    Add cart
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Customerviewmenu;

