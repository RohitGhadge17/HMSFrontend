import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Update from "@mui/icons-material/Update";
import Add from "@mui/icons-material/Add";
import Error from "../../Error/Error";

const HospitalPage = () => {
  const [hospitals, setHospitals] = useState([]);

  const API_URL = "https://localhost:7264/api/Hospital";
  const jwtToken=localStorage.getItem("jwtToken");

  useEffect(() => {
    getHospitals();
  }, []);
  
  const config={
    headers:{
      Authorization:"Bearer "+jwtToken
    }
  }
  const getHospitals = () => {
    axios
      .get(`${API_URL}`, config)
      .then((response) => {
        const allHospitals = response.data;
        setHospitals(allHospitals);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const deleteHospital = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`, config);
      console.log("deleted successfully", res);
      getHospitals();
    } catch (err) {
      console.error(`Error:${err}`);
    }
  };
  return (
    <>
    {jwtToken===null?<Error/>:<>
      <Header />
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <div id="main">
              <article>
                <h2>
                  LIST OF HOSPITALS
                </h2>
                <br />
                <Link to="/addhospital">
                  <Button variant="contained" startIcon={<Add />}>
                    Add Hospital
                  </Button>
                </Link>
                <br />
                <br />
                <div style={{ margin: "2rem" }}>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">
                            <b style={{ fontSize: "18px" }}>Name</b>
                          </TableCell>
                          <TableCell align="center">
                            <b style={{ fontSize: "18px" }}>Locality</b>
                          </TableCell>
                          <TableCell align="center">
                            <b style={{ fontSize: "18px" }}>Actions</b>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {hospitals && hospitals.length > 0
                          ? hospitals.map((hospital) => (
                              <TableRow key={hospital.hospitalId}>
                                <TableCell
                                  component="th"
                                  scope="row"
                                  align="center"
                                >
                                  {hospital.hospitalName}
                                </TableCell>
                                <TableCell align="center">
                                  {hospital.location}
                                </TableCell>
                                <TableCell align="center">
                                  <Link
                                    to={`/edithospital/${hospital.hospitalId}`}
                                  >
                                    <Button
                                      variant="contained"
                                      startIcon={<Update />}
                                    >
                                      Edit
                                    </Button>
                                  </Link>
                                  &nbsp;
                                  <Link>
                                    <Button
                                      variant="contained"
                                      startIcon={<DeleteIcon />}
                                      onClick={() =>
                                        deleteHospital(hospital.hospitalId)
                                      }
                                    >
                                      Delete
                                    </Button>
                                  </Link>
                                </TableCell>
                              </TableRow>
                            ))
                          : "No data available"}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </article>
            </div>
          </Col>
        </Row>
      </Container>
    </>}
    </>
  );
};

export default HospitalPage;
