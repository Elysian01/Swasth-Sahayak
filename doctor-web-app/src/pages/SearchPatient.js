import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/common.css";
import InputField from "../components/input_fields/InputField";
import Navbar from "../components/misc/Navbar";

function SearchPatient() {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState("");

  const handleInputChange = (event) => {
    setPatientId(event.target.value);
  };

  const handleViewClick = () => {
    navigate("/patient-dashboard", { state: { patientId } });
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="login">
        <div className="login-bg">
          <img src={require(`../static/imgs/mental-patient.png`)} alt="" />
        </div>
        <div className="content">
          <div className="greetings">
            <h1 className="greetings-1">Search Patient</h1>
          </div>
          <br />
          <br />
          <div className="subtext">
            <h3>Please Enter Below Details</h3>
          </div>
          <InputField
            type="text"
            placeholder="Please Enter ABHA-ID"
            value={patientId}
            onChange={handleInputChange}
          />
          <div className="login-submit">
            <button onClick={handleViewClick} className="login-btn">
              Search
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default SearchPatient;
