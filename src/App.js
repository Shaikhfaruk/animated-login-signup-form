import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";
import Menu from "./Menu";

const App = () => {
  return (
    <>
      <Menu />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    </>
  );
};
export default App;
