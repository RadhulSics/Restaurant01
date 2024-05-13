import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Payment() { 
  const navigate=useNavigate();
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    if (
      cardInfo.number.length === 16 &&
      cardInfo.name !== "" &&
      cardInfo.expiry.length === 7 &&
      cardInfo.cvc.length === 3
    ) {
      alert("Payment  successfully!");
      navigate("/Staffvieworderpage")
    } else {
      alert("Please fill all card details.");
    }
  };

  const handleCancel = () => {  
    alert("Payment cancelled.");
    navigate("/Ordernow");
   
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Payment</h1>
      <form className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="number"
            placeholder="XXXX XXXX XXXX XXXX"
            maxLength="16"
            value={cardInfo.number}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardName">Card Holder Name</label>
          <input
            type="text"
            id="cardName"
            name="name"
            placeholder="Enter card holder name"
            value={cardInfo.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiry">Expiry Date</label>
          <input
            type="text"
            id="expiry"
            name="expiry"
            placeholder="MM/YYYY"
            maxLength="7"
            value={cardInfo.expiry}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvc">CVC</label>
          <input
            type="text"
            id="cvc"
            name="cvc"
            maxLength="3"
            placeholder="Enter CVC"
            value={cardInfo.cvc}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="btn-group">
          <button type="button" className="btn-pay" onClick={handlePayment}>
            Pay Now
          </button>
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
