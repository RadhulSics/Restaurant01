import React, { useEffect, useState } from "react";
import axios from "axios";
function Customerviewmenu() {
  const [state, setState] = useState([]);
  let custid = localStorage.getItem("custId");

  const [cartdata, setCartdata] = useState({
    userid: custid,
    count: "1",
  });
  console.log(cartdata);
  const fetchFood = async () => {
    const response = await axios.post("http://localhost:5000/viewmenu");
    console.log(response.data.result);
    setState(response.data.result);
  };
  useEffect(() => {
    fetchFood();
  }, []);

  const handleClick = (id) => {
    console.log(id);
    axios
        .post(`http://localhost:5000/addcart/${id}`, cartdata)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            alert(res.data.msg);
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <div className="m-4">
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
                <label className="form-label me-4">Quantity:</label>
                <select
                  name="count"
                  onChange={(a) => {
                    setCartdata({
                      ...cartdata,
                      [a.target.name]: a.target.value,
                    });
                    x.amount=x.price*a.target.value;
                  }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
                <h4 className="mb-2">
                  Price: {"\u20B9"}
                  {(x.amount)?(x.amount):(x.price)}
                </h4>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleClick(x._id);
                }}
              >
                Add cart
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}

export default Customerviewmenu
