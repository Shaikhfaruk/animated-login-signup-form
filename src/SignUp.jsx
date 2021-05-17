import React, { useState } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitform = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };

    setAllEntry([...allEntry, newEntry]);
  };

  let style = { "--i": 1 };
  let style2 = { "--i": 2 };
  let style3 = { "--i": 3 };
  let style4 = { "--i": 4 };
  return (
    <>
      <form className="gradient-border" action="" onSubmit={submitform}>
        <div className="logSign">
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
        <div className="login-card" style={{ zIndex: "1" }}>
          <div className="login-card-content">
            <h2>
              Create <span className="highlight">Account</span>
            </h2>

            <div className="form">
              <div className="form-field username">
                <div className="icon">
                  <i className="fa fa-user"></i>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email id"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field password">
                <div className="icon">
                  <i className="fa fa-lock"></i>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="btn-grad" type="submit">
                Sign Up
              </button>

              <div>
                Do you have an account?{" "}
                <NavLink exact to="/login">
                  Login
                </NavLink>
              </div>
              <div className="login-card-footer">
                <a href="">Terms & Conditions </a>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* show enterd password and email id  */}
      <div>
        {allEntry.map((curElem) => {
          return (
            <div className="login-card-footer">
              <p> Your email id: {curElem.email}</p>
              <p> Your Password: {curElem.password}</p>
            </div>
          );
        })}
      </div>
      <div className="main-glowing" style={{ zIndex: "-2" }}>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
          <span style={style4}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
          <span style={style4}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
          <span style={style4}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
          <span style={style4}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
          <span style={style4}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
          <span style={style4}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
          <span style={style4}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
          <span style={style4}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
          <span style={style4}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
          <span style={style4}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
          <span style={style4}></span>
        </div>
      </div>
    </>
  );
};
export default SignUp;
