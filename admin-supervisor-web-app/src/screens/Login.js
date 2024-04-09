import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import InputField from "../components/inputs/InputFields";
import LoginBG from "../components/misc/LoginBG";
import "./css/login.css";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {};
  return (
    <div>
      <Navbar />
      <PageHeading title="Login" />
      <div className="login">
        <LoginBG />
        <div className="content">
          <div className="subtext">
            <h3>Please Enter Below Details</h3>
          </div>
          <form>
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
