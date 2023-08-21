import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  Heading,
  Label,
  Input,
  Button,
  BtnContainer,
} from "../../StyledComponents/FormStyles";
import axios from "axios";

const AddHospital = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [location, setLocation] = useState("");
  const jwtToken=localStorage.getItem("jwtToken");
  const url = "https://localhost:7264/api/Hospital";

  const config={
    headers:{
      Authorization:"Bearer "+jwtToken
    }
  }

  const navigate = useNavigate();

  const onNameChangeHandler = (e) => {
    setHospitalName(e.target.value);
  };

  const onLocalityChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  const backBtnHandler = () => {
    navigate("/hospital");
  };

  const onSubmitClickHandler = async (e) => {
    e.preventDefault();
    const post = {
      hospitalName,
      location,
    };
    try {
      const res = await axios.post(url, post, config);
      console.log(res);
    } catch (err) {
      alert(err.response.data)
    }

    navigate("/hospital");
  };

  return (
    <FormContainer>
      <div>
        <Heading>Add Hospital Form</Heading>
      </div>
      <br />
      <form onSubmit={onSubmitClickHandler}>
        <Label htmlFor="name">
          <b>Name of Hospital :</b>
        </Label>
        <Input
          type="text"
          placeholder="Hospital's Name"
          value={hospitalName}
          onChange={onNameChangeHandler}
          required
          pattern={"[A-Za-z ]+"}
          title="Must contain alphabets and spaces only, numbers not allowed"
        />

        <Label htmlFor="locality">
          <b>Locality of Hospital :</b>
        </Label>
        <Input
          type="text"
          placeholder="Address of Hospital"
          value={location}
          onChange={onLocalityChangeHandler}
          required
          title="Can contain alphabets, numbers and some relevant symbols"
        />
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

export default AddHospital;
