
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Admindashboard from "./Admindashboard";
function Editfooddetails() {
  const { id } =useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    foodname: "",
    image: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/viewone/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
   
    if (data.foodname.trim() === "" || data.price.trim() === "" || data.category.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    axios.post(`http://localhost:5000/editfooddetails/${id}`, data)
      .then((res) => {
        console.log(res);
        alert("Updated successfully");
        navigate("/editfood");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <div style={{ display: "flex" }}>
    <div style={{ flex: "0 0 200px", backgroundColor: "#f0f0f0" }}>
      <Admindashboard />
    </div>
    <div className="mx-auto shadow-lg" style={{ width: "20rem",height:"38rem", marginTop: "7rem", backgroundColor: "lightblue", borderRadius: "0.5rem" }}>
      <form>
        <div>
          <h2 className="text-center pt-3 mb-3">Edit Food Item</h2>
        </div>
        <div className="d-flex p-2 ps-3">
          <label className="form-label" style={{ width: "7.5rem" }}>
            Food name:
            <input type="text" placeholder="Enter the food name" value={data.foodname} name="foodname" onChange={handleChange} style={{ width: "15rem" }} className="form-control" required />
          </label>
        </div>
        <div className="d-flex p-2 ps-3">
          <label className="form-label" style={{ width: "7.5rem" }}>
            Food image:
            <input type="file" name="image" accept="image/*" onChange={handleChange} style={{ width: "15rem" }} className="form-control" required />
          </label>
        </div>
        <div className="d-flex p-2 ps-3">
          <label className="form-label" style={{ width: "7.5rem" }}>
            Price:
            <input type="tel" placeholder="Enter the price" value={data.price} name="price" onChange={handleChange} style={{ width: "15rem" }} className="form-control" required />
          </label>
        </div>
        <div className="d-flex p-2 ps-3">
          <label className="form-label" style={{ width: "7.5rem" }}>
            Category:
            <textarea type="text" placeholder="Enter the Category" name="category" value={data.category} onChange={handleChange} style={{ width: "15rem" }} className="form-control" required />
          </label>
        </div>
        <div className="pb-3 mt-3 text-center">
          <button className="btn btn-success" onClick={handleUpdate}>Update item</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Editfooddetails;
