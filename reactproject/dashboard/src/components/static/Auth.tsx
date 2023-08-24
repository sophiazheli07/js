import React, { useContext, useState } from "react";
import { FlexColumn } from "../shared/flex";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { DashboardContext } from "../../contexts/DashboardContext";
import styled from "styled-components";

<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600&display=swap" rel="stylesheet"></link>

const StyledAuthContainer = styled(FlexColumn)`
  width: 30%;
  align-items: center;
  gap: 10px;
  background-color: #ecd4f140;
  margin: 0 auto;
  align-items: center;
  margin-top: 20px;
  padding: 30px;
  border-radius: 20px;
  font-family: 'Noto Sans', sans-serif;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  background-color: #cba8e7;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;
const StyledHeading = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
  color: #333;
  
`;

export const Auth = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [_, setLocalStorageFormData] = useLocalStorage("userData");

  const navigate = useNavigate();

  const { setUser } = useContext(DashboardContext)!;

  const onSubmit = () => {
    setLocalStorageFormData(formData);
    // setFormData({ email: "", password: "" });

    if (formData.email === "admin" && formData.password === "admin") {
      setUser(formData);
      navigate("/dashboard");
    } else {
      alert("wrong data");
    }
    setFormData({ email: "", password: "" });
  };


  return (
    <StyledAuthContainer>
      <StyledHeading>Login</StyledHeading>
      <StyledInput
        type="text"
        placeholder="email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />

      <StyledInput
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />

      <StyledButton onClick={onSubmit}>Submit</StyledButton>
    </StyledAuthContainer>
    
  );

  
  
};
