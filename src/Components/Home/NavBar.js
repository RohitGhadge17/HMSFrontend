import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  const homeClickHandler = () => {
    navigate("/");
  };

  return (
    <nav className="navbar" data-testid="navbar">
        <div className="home-icon" data-testid="home-icon" onClick={homeClickHandler}>
          <FaHome />
        </div>
        <ul className="navbar-items">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <button className="signin-button">
              <Link to="/login">SignIn</Link>
            </button>
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
