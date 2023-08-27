import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { FlexColumn } from "./components/shared/flex";
import { Auth } from "./components/static/Auth";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { DashboardContextProvider } from "./contexts/DashboardContext";
import { ScrollTopContextProvider } from 'react-use-scroll-to';


function App() {
  return (
    <ScrollTopContextProvider>
        <FlexColumn
        width="100%"
      >
        <DashboardContextProvider>
          <RouterProvider router={router} />
        </DashboardContextProvider>

      </FlexColumn>
    </ScrollTopContextProvider>
   
  );
}

export default App;
