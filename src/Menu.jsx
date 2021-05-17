import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Menu = () => {
  return (
    <>
      <div className="navbar_main" style={{ zIndex: "1" }}>
        <NavLink
          exact
          activeClassName="active_class"
          className="navbar_items2"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          exact
          activeClassName="active_class"
          className="navbar_items2"
          to="/signup"
        >
          SignUp
        </NavLink>

        <NavLink
          exact
          activeClassName="active_class"
          className="navbar_items3"
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
