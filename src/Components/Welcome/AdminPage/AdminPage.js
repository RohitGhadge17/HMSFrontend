import React, { useEffect, useState } from "react";
import "../AdminPage/AdminPage.css";
import { FaHome, FaHospitalSymbol, FaUserAlt } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Image from "../../image/doctor.jpg";
import Error from "../../Error/Error";

const AdminPage = () => {
  const loggeduser = localStorage.getItem("jwtToken");
  console.log(loggeduser);

  return (
    <>
      {loggeduser === null ? 
      <Error/>
      : 
      <>
      {/* Header */}

      <Header />

      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={2}>
            <Sidebar />
          </Col>

          {/* Main Content */}
          <Col md={10}>
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
                      <h2 className="card-title">Welcome To Admin Page</h2>
                      <br />
                      <p className="card-text">
                        <h5>
                          1. Admin can add, delete and update the hospitals.
                        </h5>
                        <br />
                        <h5>
                          2. Admin can add, delete and update the users.
                        </h5>
                        <br />
                        <h5>3. Admin can add and delete the roles.</h5>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
      }
    </>
  );
};

export default AdminPage;
