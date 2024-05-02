import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../login/authSlice";
import { useNavigate } from "react-router-dom";
import "./css/common.css";
import "./css/login.css";
import Navbar from "../components/misc/Navbar";
import LoginBG from "../components/misc/LoginBG";
import InputField from "../components/input_fields/InputField";
import { useAuthApi } from "../login/authApi";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role = "DOCTOR";
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await useAuthApi.login({ username: email, password, role });
      dispatch(setCredentials(userData));
      navigate("/doctor-dashboard");
    } catch (err) {
      setError("Invalid email or password"); // Set error message for invalid credentials
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="login">
        <LoginBG />
        <div className="content">
          <div className="greetings">
            <h1 className="greetings-1">Welcome to</h1>
            <h1 className="greetings-2">Swasth Sahayak</h1>
          </div>
          <h2 className="login-heading">Login</h2>
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

            <div className="login-subtext-right">
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>

            {error && <div className="error">{error}</div>}

            <div className="login-submit">
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;
