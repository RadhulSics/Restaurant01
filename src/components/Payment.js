import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  let custid = localStorage.getItem("userid");
  const [state, setState] = useState([]);
  let total = 0;

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/viewOrder/${custid}`);
      setState(response.data.result);
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const handleChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    if (
      cardInfo.number.length === 16 &&
      cardInfo.name.trim() !== "" &&
      cardInfo.expiry.length === 7 &&
      cardInfo.cvc.length === 3
    ) {
      axios
        .post("http://localhost:5000/updatePaymentStatus", { orderIds: state.map((order) => order._id) })
        .then((res) => {
          alert(res.data.message);
          navigate("/Customerviewmenu");
        })
        .catch((err) => {
          console.error("Error updating payment status:", err);
          alert("Failed to update payment status. Please try again.");
        });
    } else {
      alert("Invalid Card Details");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/cancelOrder", { orderIds: state.map((order) => order._id) })
      .then((res) => {
        alert(res.data.message);
        navigate("/Customerviewmenu");
      })
      .catch((err) => {
        console.error("Error cancelling order:", err);
        alert("Failed to cancel order. Please try again.");
      });
  };

  return (
    <div className="mb-5">
      {state.map((x) => {
        if (x.paymentstatus === false) {
          total = total + x.count * x.amount;
        }
      })}
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
    </div>
  );
}

export default Payment;
