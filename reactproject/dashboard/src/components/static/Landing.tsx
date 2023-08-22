import React from "react";
import { Link } from "react-router-dom";
import { FlexColumn, FlexRow } from "../shared/flex";
import mainImage from "./photos/photo-main-landing.png"
import "../shared/Landing"
import "../../landing.css"

export const Landing = () => {
  const headerStyle = {
    backgroundImage: `url(${mainImage})`, 
    backgroundSize: "cover", 
    backgroundPosition: "center",
    minHeight: "1020px"
     
    
  };
  return (
    <FlexColumn width="100%">
      <FlexRow style = {headerStyle}  as="header" width="100%"  padding="10px"  gap="100px" className="header">
        <Link to="/login">Login</Link>
        <Link to="/settings">Settings</Link>
      </FlexRow>
    </FlexColumn>
  );
};
