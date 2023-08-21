import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  const navigate = useNavigate();

  const homeClickHandler = () => {
    navigate("/admin");
  };

  return (
    <div className="body">
      <nav className="nav">
        <ul>
          <div className="icon">
            <FaHome onClick={homeClickHandler} />
          </div>
          <li>
            <div className="admin-logo" onClick={toggleDropdown}>
              <AiOutlineUser />
              <span>Admin</span>
            </div>
            {dropdownOpen && (
              <div className="dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
