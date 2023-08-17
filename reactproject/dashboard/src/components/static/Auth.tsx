import React, { useContext, useState } from "react";
import { FlexColumn } from "../shared/flex";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import {useNavigate} from "react-router-dom"
import { DashboardContext } from "../../contexts/DashboardContext";

export const Auth = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [_, setLocalStorageFormData] =
    useLocalStorage("userData");

  const navigate = useNavigate();

  const {setUser} = useContext(DashboardContext)!;

  const onSubmit = () => {
    setLocalStorageFormData(formData);
    // setFormData({ email: "", password: "" });

    if (formData.email === "admin" && formData.password === "admin") {
      setUser(formData);
      navigate("/dashboard")
    }else {
      alert("wrong data")
    }
    setFormData({ email: "", password: ""});
  };

  return (
    <FlexColumn width="100%" alignItems="center" gap="10px">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />

      <button onClick={onSubmit}>Submit</button>
    </FlexColumn>
  );
};
