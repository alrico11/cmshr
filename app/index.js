import React from "react";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./services/router";

export default function IndexLayout() {
  // return <Profile />;
  return (
    // <Register/>
  //  <Login/>
    <NavigationContainer>
       <Routes />
     </NavigationContainer>
  );
}
