import React from 'react';
import NavBar from "../../Home/NavBar";
import Footer from "../../Home/Footer";
import Image from "../../image/doctor.jpg";


const Services = () => {
  return (
    <>
    <NavBar />

      <div className="container">
        <div className="card my-5  ">
          <div className="row g-0">
            <div className="col-md-4 order-md-2">
              <img
                src={Image}
                className="img-fluid rounded-start"
                alt="..."
                width={300}
                height={300}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">
                  Our Services
                </h2><br />
                <p className="card-text">
                 <h5>1. We provide one on one consultation with doctors</h5><br />
                 <h5>2. We provide provision for online doctor appointment</h5><br />
                 <h5>3. We provide provision to book doctor appointment based on his specialization</h5>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
  )
}

export default Services