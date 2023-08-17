import React, { useContext, useEffect } from "react";
import { FlexColumn } from "../shared/flex";
import { DashboardContext } from "../../contexts/DashboardContext";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const { user } = useContext(DashboardContext)!;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if(!user) return <h1>Not authorized</h1>

  return (
    <FlexColumn width="100%">
      <h1>Dashboard, hello {user?.email}</h1>
    </FlexColumn>
  );
};
