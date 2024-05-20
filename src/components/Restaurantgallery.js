import React from "react";
import food1 from "../Assests/restuarant.jpeg";
import dining from "../Assests/dining.jpg";
import delivery from "../Assests/delivery.jpg";
import event from "../Assests/event.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

function Restaurantgallery() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ position: "relative" }}>
        <img src={food1} style={{ width: "100%", height: "auto" }} alt="food1" />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            fontSize: "7rem",
            fontWeight: "italic",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          WELCOME TO OUR RESTAURANT
        </div>
      </div>
      
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ position: "relative" }}>
              <img src={dining} className="card-img-top" alt="Dining Available" />
              <div 
                className="card-img-overlay"
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                <h5 className="card-title">Dining Available</h5>
                <p className="card-text">Enjoy a wonderful dining experience at our restaurant with a cozy atmosphere.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ position: "relative" }}>
              <img src={delivery} className="card-img-top" alt="Home Delivery" />
              <div 
                className="card-img-overlay"
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                <h5 className="card-title">Home Delivery</h5>
                <p className="card-text">Get your favorite dishes delivered to your doorstep with our efficient home delivery service.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ position: "relative" }}>
              <img src={event} className="card-img-top" alt="Event Catering" />
              <div 
                className="card-img-overlay"
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                <h5 className="card-title">Event Catering</h5>
                <p className="card-text">We offer catering services for events of all sizes, ensuring a delightful culinary experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: "center", padding: "1rem", background: "#f8f9fa" }}>
        &copy; 2024 Your Restaurant Name. All rights reserved.
      </footer>

      <div style={{ textAlign: "center", padding: "1rem", background: "#e9ecef" }}>
        <h5>Contact Us</h5>
        <p>12/3 Food Street, Kazhakootam, Trivandrum</p>
        <p>Phone: +91 9768335511</p>
        <p>Email: contact@udhithandcorestaurant.com</p>
      </div>
    </div>
  );
}

export default Restaurantgallery;
