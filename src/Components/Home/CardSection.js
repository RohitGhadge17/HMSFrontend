import React from "react";
import "./CardSection.css";
import medicine from "../image/medication.jpg";
import doctor from "../image/doctorimage.jfif";
import labtest from "../image/labtest.jfif";
import surgery from "../image/surgery.jfif";

const CardSection = () => {
  return (
    <div className="grid-container" data-testid="card-section">
      <div className="grid-card">
        <img
          src={medicine}
          alt="medicine"
          style={{ height: "150px", width: "300px", borderRadius: "15px" }}
        />
        <h5>Medicines</h5>
        <p style={{ color: "grey" }}>Available at your door step</p>
      </div>
      <div className="grid-card">
        <img
          src={doctor}
          alt="medicine"
          style={{ height: "150px", width: "300px", borderRadius: "15px" }}
        />
        <h5>Find Doctors Near You</h5>
        <p style={{ color: "grey" }}>Confirmed appointments</p>
      </div>
      <div className="grid-card">
      <img
          src={labtest}
          alt="medicine"
          style={{ height: "150px", width: "300px", borderRadius: "15px" }}
        />
        <h5>Lab Test</h5>
        <p style={{ color: "grey" }}>Sample test available</p>
      </div>
      <div className="grid-card">
      <img
          src={surgery}
          alt="medicine"
          style={{ height: "150px", width: "300px", borderRadius: "15px" }}
        />
        <h5>Surgeries Available</h5>
        <p style={{ color: "grey" }}>Trusted and safe surgery center</p>
      </div>
    </div>
  );
};

export default CardSection;
