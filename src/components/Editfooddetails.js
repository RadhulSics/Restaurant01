import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Admindashboard from "./Admindashboard";
function Editfooddetails() {
  const { id }= useParams();
  const navigate = useNavigate()

  const [data, setData] = useState({
    foodname: "",
    image: "",
    price: "",
    category: ""
  });

  useEffect(() => {
    console.log("id", id);
    axios
      .get(`http://localhost:5000/viewone/${id}`)
      .then((res) => {
        console.log(res.data.data);
      setData(res.data.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, [id]);

  const handleChange = (a) => {
    if (a.target.name === "image") {
      setData({ ...data, image: a.target.files[0] });
    } else {
      setData({ ...data, [a.target.name]: a.target.value });
    }
  };
  console.log(data);
  const handleUpdate = (a) => {
    a.preventDefault();
    const formData = new FormData();
    formData.append("foodname",data.foodname);
    formData.append("image",data.image);
    formData.append("price",data.price);
    formData.append("category",data.category);
    axios
      .post(`http://localhost:5000/editfooddetails/${id}`,formData
      ,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        alert("updated succesfully");
        navigate("/editfood")
      })
      .catch((err) => {
        console.log("Error", err);
        alert("failed to update")
      });
   
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0 0 200px", backgroundColor: "#f0f0f0" }}>
        <Admindashboard />
      </div>
    <div
      className="mx-auto shadow-lg"
      style={{
        width: "25rem",
        marginTop: "7rem",
        backgroundColor: "lightseagreen",
        borderRadius: "0.5rem",
      }}
    >
      <form>
        <div>
          <h2 className="text-center pt-3 mb-3">Edit Food Item</h2>
        </div>
        <div className="d-flex p-2 ps-3">
          <label className="form-label" style={{ width: "7.5rem" }}>
            Food name:
          </label>
          <input
            type="text"
            placeholder="Enter the food name"
            value={data.foodname}
            name="foodname"
            onChange={handleChange}
            style={{ width: "15rem" }}
            className="form-control"
          ></input>
        </div>
        <div className="d-flex p-2 ps-3">
          <label className="form-label" style={{ width: "7.5rem" }}>
            Food image:
          </label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            style={{ width: "15rem" }}
            className="form-control"
          ></input>
        </div>
        <div className="d-flex p-2 ps-3">
          <label className="form-label" style={{ width: "7.5rem" }}>
            Price:
          </label>
          <input
            type="tel"
            placeholder="Enter the price"
            value={data.price}
            name="price"
            onChange={handleChange}
            style={{ width: "15rem" }}
            className="form-control"
          ></input>
        </div>
        <div className="d-flex p-2 ps-3">
          <label className="form-label" style={{ width: "7.5rem" }}>
           category:
          </label>
          <textarea
            type="text"
            placeholder="category"
            name="category"
            value={data.category}
            onChange={handleChange}
            style={{ width: "15rem" }}
            className="form-control"
          ></textarea>
        </div>
        <div className="pb-3 mt-3 text-center">
          <button className="btn btn-success" onClick={handleUpdate}>
            Update item
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Editfooddetails;








