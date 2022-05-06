import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import "./registerlogin.css";
import RegistrationLoginImage from "../assets/login.png";
// const url = "http://localhost:3002";
const url = "https://ishopbackendsktech.herokuapp.com";
const Login = () => {
  const navigate = useNavigate();
  const [formerror, setformerror] = useState({});
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  const [loginStatus, setloginStatus] = useState(false);
  let namelogin, valuelogin;
  const handleLogin = (e) => {
    namelogin = e.target.name;
    valuelogin = e.target.value;
    setloginData({ ...loginData, [namelogin]: valuelogin });
  };
  const loginPost = async (e) => {
    e.preventDefault();
    setformerror(validate(loginData));
    try {
      const res = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      if (res.status === 400 || !data) {
        window.alert("invalid data");
        console.log("invalid data");
      } else {
        window.alert("login successfull");
        console.log("login successfull");
        navigate("/");
      }
    } catch (error) {
      console.log(`login ${error}`);
      window.alert("invalid Data");
      setloginStatus(true);
    }
  };
  const validate = (values) => {
    const error = {};
    if (!values.email) {
      error.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      error.email = "invalid email";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  return (
    <>
      <div className="loginContainer">
        <h2 className="headingLoginSignup">Login</h2>
        <label htmlFor="loginEmail" className="commonStyleLogin">
          Email
        </label>
        <input
          type="email"
          id="loginEmail"
          placeholder="Enter Email"
          name="email"
          value={loginData.email}
          onChange={handleLogin}
          className="commonStyleLogin"
        />
        <p>{formerror.email}</p>
        <label htmlFor="loginPassword" className="commonStyleLogin">
          Password
        </label>
        <input
          type="password"
          id="loginPassword"
          placeholder="Enter Password"
          onChange={handleLogin}
          value={loginData.loginPassword}
          name="password"
          className="commonStyleLogin"
        />
        <p>{formerror.password}</p>
        <button onClick={loginPost} className="loginButton">
          Login
        </button>
        {loginStatus ? <p>invalid data</p> : null}
        <NavLink to="/register" className="creatAccount">
          New to iShop? Create an account
        </NavLink>
        <img src={RegistrationLoginImage} alt="pic" />
      </div>
    </>
  );
};

export default Login;
