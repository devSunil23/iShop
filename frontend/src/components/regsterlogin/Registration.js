import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import registrationLoginimage from "../assets/login.png";
import "./registerLoginresponsive.css";
import Dialog from "@mui/material/Dialog";
// const url = "http://localhost:3002";
const url = "https://ishopbackendsktech.herokuapp.com";
const Registration = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [formerror, setformerror] = useState({});
  const [submit, setSubmit] = useState(false);
  const [showvalid, setshowvalid] = useState(false);
  let name, value;
  const handleEvent = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
    setSubmit(true);
  };
  useEffect(() => {
    console.log(formerror);
    if (Object.keys(formerror).length === 0 && submit) {
      console.log(data);
    }
  }, [formerror]);

  const postdata = async (e) => {
    e.preventDefault();
    setformerror(validate(data));
    try {
      const res = await axios.post(`${url}/register`, data);
      if (res.status === 422 || !res) {
        window.alert("invalid registration");
        console.log("invalid registration");
      } else {
        window.alert("registration successfull");
        console.log("registration successfull");
        navigate("/login");
        setData({
          name: "",
          mobile: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
      }
    } catch (error) {
      console.log(`Registration ${error}`);
      window.alert("invalid registration");
      setshowvalid(true);
    }
  };
  const validate = (values) => {
    const error = {};
    if (!values.name) {
      error.name = "Name is required";
    } else if (values.name.length < 3) {
      error.name = "please enter valid name";
    } else if (values.name.length > 20) {
      error.name = "please enter valid name";
    }
    if (!values.mobile) {
      error.mobile = "mobile number is required";
    } else if (values.mobile.length < 10) {
      error.mobile = "please enter valid mobile number";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      error.email = "invalid email";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more then 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more then 10 characters";
    }
    if (!values.confirmpassword) {
      error.confirmpassword = "confirm password is required";
    } else if (values.confirmpassword.length < 4) {
      error.confirmpassword = "Password must be more then 4 characters";
    } else if (values.confirmpassword.length > 10) {
      error.confirmpassword =
        "Confrim Password cannot exceed more then 10 characters";
    } else if (values.password != values.confirmpassword) {
      error.confirmpassword = "Password And Confirm Password are not same.";
    }

    return error;
  };
  return (
    <>
      <div className="registration">
        <h2 className="headingLoginSignup">Signup</h2>
        <label htmlFor="name">Enter Full Name</label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={data.name}
          name="name"
          onChange={handleEvent}
        />
        <p>{formerror.name}</p>
        <label htmlFor="mobile">Enter Mobile Number</label>
        <input
          type="text"
          placeholder="Mobile Number"
          id="mobile"
          name="mobile"
          value={data.mobile}
          onChange={handleEvent}
        />
        <p>{formerror.mobile}</p>
        <label htmlFor="email">Enter Email Id</label>
        <input
          type="email"
          placeholder="Email Id"
          id="email"
          name="email"
          value={data.email}
          onChange={handleEvent}
        />
        <p>{formerror.email}</p>
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={data.password}
          onChange={handleEvent}
        />
        <p>{formerror.password}</p>
        <label htmlFor="confirmpassword">Enter Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmpassword"
          name="confirmpassword"
          value={data.confirmpassword}
          onChange={handleEvent}
        />
        <p>{formerror.confirmpassword}</p>
        <button onClick={postdata} className="loginButton">
          Register
        </button>
        {showvalid ? <p> invalid Registration </p> : null}
        <NavLink to="/login" className="creatAccount">
          Existing User ? Login
        </NavLink>
        <img src={registrationLoginimage} alt="" />
      </div>
    </>
  );
};

export default Registration;
