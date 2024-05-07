import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../login/authSlice";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import InputField from "../components/inputs/InputField";
import LoginBG from "../components/misc/LoginBG";
import { authApi } from "../login/authApi";

import "./css/login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [role, setRoles] = useState("ADMIN");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleRoleChange = (event) => {
    setRoles(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await authApi.login({
        username: email,
        password,
        role,
      });
      console.log("passig this data"+userData);
      dispatch(setCredentials(userData));
      navigate(role === "ADMIN" ? "/admin-dashboard" : "/super-dashboard");
    } catch (err) {
      setError("Invalid email or password"); // Set error message for invalid credentials
    }
  };
  
  return (
    <div>
      <Navbar />
      <PageHeading title="Login" />
      <div className="login">
        <LoginBG />
        <div className="content">
          <div className="greetings">
            <h1 className="greetings-1">Welcome to</h1>
            <h1 className="greetings-2">Swasth Sahayak</h1>
          </div>
          <div className="subtext">
            <h3>Please Enter Below Details</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              placeholder="Enter Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <InputField
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br/>
            <select
              className="form__field"
              value={role}
              onChange={handleRoleChange}
            >
              <option value="ADMIN">ADMIN</option>
              <option value="SUPERVISOR">SUPERVISOR</option>
            </select>
            <div className="login-subtext-right">
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>
            <div className="login-submit">
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;