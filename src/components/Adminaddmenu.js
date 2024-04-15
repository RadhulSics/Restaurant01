import React, { useState } from 'react'

function Adminaddmenu() {
  const[data,setData]=useState({
    foodname: "",
    image: "",
    price: "",
    
  })
  const handleChange=(a)=>{
    setData({ ...data, [a.target.name]: a.target.value });
    console.log(data);
  }
  const handleSubmit=(a)=>{
    a.preventDefault();
    console.log(data);

  }
  return (
    <div
      className="mx-auto shadow-lg mb-5"
      style={{

        width: "25rem",
        marginTop: "7rem",
        borderRadius: "0.5rem",
      }}
    >
      <form className="form-control d-block bg-warning-subtle">
        <div>
          <h2 className="text-center mt-3 mb-3">Add food items</h2>
        </div>
        <div className="d-flex p-2">
          <label className="form-label" style={{ width: "7rem" }}>
            Food name:
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter the food name"
            name="foodname"
            style={{ width: "15rem" }}
            onChange={handleChange}
          ></input>
        </div>
        <div className="d-flex p-2">
          <label className="form-label" style={{ width: "7rem" }}>
            Food image:
          </label>
          <input
            className="form-control"
            type="file"
            name="image"
            onChange={handleChange}
            style={{ width: "15rem" }}
          ></input>
        </div>
        <div className="d-flex p-2">
          <label className="form-label" style={{ width: "7rem" }}>
            Price:
          </label>
          <input
            type="tel"
            placeholder="Enter the price"
            name="price"
            onChange={handleChange}
            style={{ width: "15rem" }}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3 mt-3 text-center">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Add item
          </button>
        </div>
      </form>
    </div>
  )
}

export default Adminaddmenu
