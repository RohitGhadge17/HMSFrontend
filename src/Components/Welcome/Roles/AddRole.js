import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  Heading,
  Label,
  Input,
  Button,
  BtnContainer,
} from "../../StyledComponents/FormStyles";

const AddRole = () => {
  const [roleName, setRoleName] = useState("");
  const [roles, setRoles] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");

  // const API_URL_ALL_ROLES = "https://localhost:7264/api/roles";
  const url = "https://localhost:7264/api/roles";

  const config = {
    headers: {
      Authorization: "Bearer " + jwtToken,
    },
  };

  const navigate = useNavigate();

 
  const getRoles = async () => {
    try {
      const response = await axios.get("https://localhost:7264/api/roles");
      const allRoles = response.data;
      setRoles(allRoles);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getRoles();
  }, []);

  const onRoleChangeHandler = (e) => {
    setRoleName(e.target.value);
  };

  const backBtnHandler = () => {
    navigate("/role");
  };

  const onSubmitClickHandler = async (e) => {
    e.preventDefault();

    const tmpRoles = roles.filter(
      (item) => item.roleName.toLowerCase() === roleName.toLowerCase()
    );
    if (tmpRoles.length > 0) {
      alert("Role already exists, please enter a different role.");
      return;
    }

    const post = {
      roleName,
    };

    try {
      const res = await axios.post(url, post, config);
      console.log(res);
    } catch (err) {
      console.error(`Error: ${err}`);
    }

    navigate("/role");
  };

  return (
    <FormContainer>
      <div>
        <Heading>Add Role Form</Heading>
      </div>
      <br />

      <form onSubmit={onSubmitClickHandler}>
        <Label htmlFor="roleName">Select your role:</Label>

        <Input
          type="text"
          id="roleName"
          placeholder="Add Role"
          value={roleName}
          onChange={onRoleChangeHandler}
          required
        />

        <br />
        <BtnContainer>
          <Button
            type="button"
            className="back-btn"
            value="Back"
            onClick={backBtnHandler}
            back
          />
          <Button type="submit" className="btn" value="Submit" />
        </BtnContainer>
      </form>
    </FormContainer>
  );
};

export default AddRole;
