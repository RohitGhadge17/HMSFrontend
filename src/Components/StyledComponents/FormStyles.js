import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 600px;
  max-height: 1200px;
  margin: 16px auto;
  padding: 20px;
  border: 5px solid #1976d2;
  border-radius: 5px;
  background-color: #f8f8f8 !important;
`;

export const Heading = styled.h3`
  text-align: center;
  color: white !important;
  line-height: 1.6;
  text-decoration: none;
  background-color: #1976d2;
  font-size: 32px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const Button = styled.input`
  display: block;
  width: 80%;
  padding: 10px;
  color: #fff;
  background-color: ${props => (props.back ? "#dc3545" : "#0bc90b")};
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1976d2;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

export const PasswordToggleBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  font-size: 20px;
  color: black;
`;