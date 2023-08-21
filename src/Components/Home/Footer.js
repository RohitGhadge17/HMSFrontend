import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" data-testid="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <p>
              Hospital Management System
              <br />
              Country, Postal Code
              <br />
              Phone: 911-777-555
              <br />
              Email: hospitalmanagement@gmail.com
            </p>
          </div>
          <div className="col-md-6">
            <h4>Social</h4>
            <p>
              <Link to="https://www.facebook.com" className="social-link">Facebook</Link>
              <br />
              <Link to="https://www.twitter.com" className="social-link">Twitter</Link>
              <br />
              <Link to="https://www.linkedin.com" className="social-link">LinkedIn</Link>
              <br />
              <Link to="https://www.youtube.com" className="social-link">Youtube</Link>
              <br />
              <Link to="https://www.github.com" className="social-link">Github</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
