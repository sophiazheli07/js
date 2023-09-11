import React from "react";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: 36px;
  color: #333;
`;
export const FlexComponent = styled.div`
  background-color: #202B3C;
  font-size: 20px;
  margin: 10px;
  padding: 20px;
  border-radius: 15px;

`;
export const IconHolder = styled.div`
  background-color: #354560;
  height: 30px;
  width: 30px;
  border-radius: 8px;
  justify-content: center;
  text-align: center;
  align-items: center;

  padding-top: 5px;
  padding-left: 3px;
  padding-right: 3px;

`;
export const Input = styled.input`
  background-color: #202B3C;
  border-radius: 10px;
  border: 2px solid #141d2c;
  height: 30px;
  width: 300px;
  color: white;
  padding: 5px;
  margin: 5px;
`;
export const Button = styled.button`
  background-color: #0B121E;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 10px;
  width: 315px;
  text-align: center;
  display: flex;
  margin-left: 5px
`;

export const GlobalStyles = styled.div`
    background-color: #0B121E;
    margin: 20px;
    font-family: Arial, sans-serif;
    border-radius: 35px;
    min-height: 400px;
    margin-top: 200px;
    padding: 20px;
    font-size: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 900px;
    color: white;
`;