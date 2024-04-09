import React, { useState } from "react";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import "../components/css/common.css";
import "./css/field-worker-dashboard.css";
function FieldWorkerDashboard() {
	const [dropdown1Value, setDropdown1Value] = useState([]); // State for the first dropdown
  const [selectedDropdownValue, setSelectedDropdownValue] = useState(""); // State for selected dropdown value
	
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
        <button className="small-primary-btn">Add New Doctor</button>
      </div>
      <div className="view-pane">
        <div className="display-card">
          <div className="person-details">
            <div className="person-name">Name: Aakash Bhardwaj</div>
            <div className="person-region">Region: 31</div>
            <div className="person-specialisation">
              Specialisation: Genral Physician
            </div>
          </div>
          <div className="button-alignment">
            <button className="dark-primary-small-btn">View</button>
            <button className="dark-primary-small-btn">Edit</button>
            <button className="pink-btn">Inactive</button>
          </div>
        </div>
        <div className="display-card">
          <div className="person-details">
            <div className="person-name">Name: Aakash Bhardwaj</div>
            <div className="person-region">Region: 31</div>
            <div className="person-specialisation">
              Specialisation: Genral Physician
            </div>
          </div>
          <div className="button-alignment">
            <button className="dark-primary-small-btn">View</button>
            <button className="dark-primary-small-btn">Edit</button>
            <button className="pink-btn">Inactive</button>
          </div>
        </div>
        <div className="display-card">
          <div className="person-details">
            <div className="person-name">Name: Aakash Bhardwaj</div>
            <div className="person-region">Region: 31</div>
            <div className="person-specialisation">
              Specialisation: Genral Physician
            </div>
          </div>
          <div className="button-alignment">
            <button className="dark-primary-small-btn">View</button>
            <button className="dark-primary-small-btn">Edit</button>
            <button className="pink-btn">Inactive</button>
          </div>
        </div>
      </div>
		</div>
	);
}

export default FieldWorkerDashboard;
