import React, { useState, useEffect } from "react";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import "../components/css/common.css";
import "./css/field-worker-dashboard.css";
import { getRequest } from "../components/Api/api";
function FieldWorkerDashboard() {
  const [dropdown1Value, setDropdown1Value] = useState([]); // State for the first dropdown
  const [selectedDropdownValue, setSelectedDropdownValue] = useState(""); // State for selected dropdown value
  const [FieldWorkerDetails, setFieldWorkerDetails] = useState([]); // State for storing doctor details array
  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYWthc2gxMjMiLCJpYXQiOjE3MTM1NTQyNzMsImV4cCI6MTcxMzU3MjI3M30.IP7aoY0GiXayio5lZsMNQUvj19hqEQtLpPOSeKdJWbfn4yiPpvxmDwWIP3EEpe4hVmdN06MUaAYoYYkzimM7eQ";

  useEffect(() => {
    const fetchFieldWorkerDetails = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        // Await the API call
        const response = await getRequest(
          "/admin/allfieldworkerDetail",
          headers
        );
        // Update the state with the fetched doctor details
        setFieldWorkerDetails(response);
      } catch (error) {
        console.error(error);
      }
    };
    // Call the fetchDoctorDetails function
    fetchFieldWorkerDetails();
  }, []);
  return (
    <div>
      <Navbar />
      <PageHeading title="Field Worker Dashboard" />
      <div className="dropdown-container">
        <div className="dropdown">
          {/* First Dropdown */}
          <select
            value={selectedDropdownValue}
            onChange={(e) => setSelectedDropdownValue(e.target.value)}
          >
            <option value="">Select Region</option>
            {dropdown1Value.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button className="small-primary-btn">Search</button>
        <button className="small-primary-btn">Add New Field Worker</button>
      </div>
      <div className="view-pane">
        {FieldWorkerDetails.map((fieldworker, index) => (
          <div className="display-card" key={index}>
            <div className="person-details">
              <div className="person-name">Name: {fieldworker.name}</div>
              <div className="person-region">
                Field Worker ID: {fieldworker.fieldworkerid}
              </div>
              <div className="person-specialisation">
                Gender: {fieldworker.gender}
              </div>
            </div>
            <div className="button-alignment">
              <button className="dark-primary-small-btn">View</button>
              <button className="dark-primary-small-btn">Edit</button>
              <button className="pink-btn">Inactive</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FieldWorkerDashboard;
