import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../AdminPage/AdminPage.css";
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
import Error from '../../Error/Error'

function UserPage() {
  const [users, setUsers] = useState([]);
  const jwtToken=localStorage.getItem("jwtToken");

  const url = "https://localhost:7264/api/users";

  const config={
    headers:{
      Authorization:"Bearer "+jwtToken
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get(`${url}`, config)
      .then((response) => {
        const allUsers = response.data;
        setUsers(allUsers);
        console.log(allUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`${url}/${id}`, config);

      console.log("deleted successfully" + res);

      getUsers();
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  return (<>{jwtToken===null?<Error/>:<>
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
              LIST OF USERS
            </h2>

            <br />

            <Link to="/adduser">
              <Button variant="contained" startIcon={<Add />}>
                Add User
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
                        <b style={{ fontSize: "18px" }}>Email</b>
                      </TableCell>
                      <TableCell align="center">
                        <b style={{ fontSize: "18px" }}>Contact</b>
                      </TableCell>
                      <TableCell align="center">
                        <b style={{ fontSize: "18px" }}>Role</b>
                      </TableCell>
                      <TableCell align="center">
                        <b style={{ fontSize: "18px" }}>Actions</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users && users.length > 0
                      ? users.map((user) => (
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              align="center"
                            >
                              {user.name}
                            </TableCell>
                            <TableCell align="center">
                              {user.email}
                            </TableCell>
                            <TableCell align="center">
                              {user.mobileNumber}
                            </TableCell>
                            <TableCell align="center">
                              {user.role.roleName}
                            </TableCell>
                            <TableCell align="center">
                              <Link to={`/edituser/${user.userId}`}>
                                <Button
                                  variant="contained"
                                  startIcon={<Update />}
                                >
                                  Edit
                                </Button>
                              </Link>
                              &nbsp;
                              <Button
                                variant="contained"
                                startIcon={<DeleteIcon />}
                                onClick={() => deleteUser(user.userId)}
                              >
                                Delete
                              </Button>
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
</>}</>
    
  );
}

export default UserPage;
