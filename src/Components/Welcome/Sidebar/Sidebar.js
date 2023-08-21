import React from 'react';
import "./Sidebar.css";
import { FaHospitalSymbol } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
    <ul>
      <li>
        <div className="side-icons">
          <FaHospitalSymbol />
          <Link to="/hospital">Hospitals</Link>
        </div>
      </li>
      <li>
        <div className="side-icons">
          <FaUserAlt />
          <Link to="/user">Users</Link>
        </div>
      </li>
      <li>
        <div className="side-icons">
          <HiUsers />
          <Link to="/role">Roles</Link>
        </div>
      </li>
    </ul>
  </nav>
  )
}

export default Sidebar
