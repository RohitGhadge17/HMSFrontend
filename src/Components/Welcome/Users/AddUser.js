import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  FormContainer,
  Heading,
  Label,
  Input,
  Button,
  BtnContainer,
  PasswordInputContainer,
  PasswordToggleBtn,
} from "../../StyledComponents/FormStyles";
import "../Hospital/Hospital.css";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState("");
  const [roles, setRoles] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [specializations, setSpecializations] = useState([]);
  const [specialization, setSpecialization] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [hospital, setHospital] = useState("");
  const jwtToken = localStorage.getItem("jwtToken");

  const config = {
    headers: {
      Authorization: "Bearer " + jwtToken,
    },
  };

  const navigate = useNavigate();
  const url = "https://localhost:7264/api/users";
  const API_URL = "https://localhost:7264/api/roles";

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onContactChangeHandler = (e) => {
    setMobileNumber(e.target.value);
  };

  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onRoleChangeHandler = (e) => {
    setRoleId(e.target.value);
  };

  const onSpecializationChangeHandler = (e) => {
    setSpecialization(e.target.value);
  };

  const onHospitalChangeHandler = (e) => {
    setHospital(e.target.value);
  };

  const backBtnHandler = () => {
    navigate("/user");
  };

  useEffect(() => {
    getRoles();
    getSpecialization();
    getHospital();
  }, []);

  const getRoles = () => {
    axios
      .get(`${API_URL}`, config)
      .then((res) => {
        const allRoles = res.data;
        setRoles(allRoles);
        console.log(allRoles);
      })
      .catch((err) => {
        console.error(`Error: ${err}`);
      });
  };

  const getSpecialization = () => {
    axios
      .get("https://localhost:7264/api/specializations", config)
      .then((res) => {
        const allSpecializations = res.data;
        setSpecializations(allSpecializations);
        console.log(allSpecializations);
      })
      .catch((err) => {
        console.error(`Error: ${err}`);
      });
  };

  const getHospital = () => {
    axios
      .get("https://localhost:7264/api/Hospital", config)
      .then((res) => {
        const allHospitals = res.data;
        setHospitals(allHospitals);
        console.log(allHospitals);
      })
      .catch((err) => {
        console.error(`Error: ${err}`);
      });
  };

  const onSubmitClickHandler = async (e) => {
    e.preventDefault();
    var role = roles.filter(
      (item) => item.roleName.toLowerCase() === roleId.toLowerCase()
    );

    const post = {
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      password: password,
      roleId: Number.parseInt(role[0].roleId),
      specializationId:
        specialization !== "" ? Number.parseInt(specialization) : null,
      hospitalId: hospital !== "" ? Number.parseInt(hospital) : null,
      role: role[0],
    };

    try {
      const res = await axios.post(url, post, config);
      console.log(res);
    } catch (err) {
      alert(err.response.data);
    }
    navigate("/user");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormContainer>
      <div>
        <Heading>Add User Form</Heading>
      </div>
      <br />
      <form onSubmit={onSubmitClickHandler}>
        <Label htmlFor="name">
          <b>Enter your full name :</b>
        </Label>
        <Input
          type="text"
          className="input-field"
          placeholder="Full Name"
          value={name}
          onChange={onNameChangeHandler}
          required
          pattern={"[A-Za-z ]+"}
          title="Must contain alphabets and spaces only, numbers not allowed"
        />
        <br />
        <Label htmlFor="email">
          <b>Enter your email address :</b>
        </Label>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChangeHandler}
          required
          title="Email should be in proper format"
        />
        <br />
        <Label htmlFor="contact">
          <b>Enter your mobile number :</b>
        </Label>
        <Input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={onContactChangeHandler}
          required
          pattern="[0-9]{10}"
          title="Mobile number should contain exactly 10 digits"
        />
        <br />
        <Label htmlFor="password">
          <b>Enter your Password :</b>
        </Label>
        <PasswordInputContainer>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={onPasswordChangeHandler}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            title="Password must contain at least 8 characters, including 1 alphabet, 1 number, and 1 special character."
            required
          />
          <PasswordToggleBtn
            type="button"
            className="password-toggle-btn"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </PasswordToggleBtn>
        </PasswordInputContainer>
        <br />

        <Label htmlFor="dropdown">Select your role:</Label>
        <select id="dropdown" value={roleId} onChange={onRoleChangeHandler}>
          <option value="">Select role</option>
          {roles.map((role) => (
            <option key={role.roleName} value={role.roleName}>
              {role.roleName}
            </option>
          ))}
        </select>
        <br />

        {roleId.toLowerCase() === "doctor" && (
          <>
            <Label htmlFor="dropdown">Select your Specialization:</Label>
            <select
              id="dropdown"
              value={specialization}
              onChange={onSpecializationChangeHandler}
            >
              <option value="">Select Specialization</option>
              {specializations.map((specialization) => (
                <option
                  key={specialization.specializationId}
                  value={specialization.specializationId}
                >
                  {specialization.specializationName}
                </option>
              ))}
            </select>
          </>
        )}

        {roleId !== "" && roleId.toLowerCase() !== "user" && (
          <>
            <br /> <Label htmlFor="dropdown">Select your Hospital:</Label>
            <select
              id="dropdown"
              value={hospital}
              onChange={onHospitalChangeHandler}
            >
              <option value="">Select Hospital</option>
              {hospitals.map((hospital) => (
                <option key={hospital.hospitalId} value={hospital.hospitalId}>
                  {hospital.hospitalName}
                </option>
              ))}
            </select>
          </>
        )}

        <br />
        <BtnContainer>
          <Button
            type="button"
            className="back-btn"
            value="Back"
            onClick={backBtnHandler}
          />
          <Button type="submit" className="btn" value="Submit" />
        </BtnContainer>
      </form>
    </FormContainer>
  );
};

export default AddUser;
