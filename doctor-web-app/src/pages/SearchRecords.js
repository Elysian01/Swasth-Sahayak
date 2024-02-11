import React, { useEffect, useState } from "react";
import Table from "../components/tables/Listings";
import axios from "axios";
import "./css/common.css";
import "./css/searchRecords.css";
import Navbar from "../components/misc/Navbar";
import viewIcon from "../static/icons/eye.png";

function SearchRecords() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dropdown1Value, setDropdown1Value] = useState(""); // State for the first dropdown
  const [dropdown2Value, setDropdown2Value] = useState(""); // State for the second dropdown

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9001/data");
        setTableData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleViewClick = (viewUrl) => {
    window.open(viewUrl, "_blank");
  };

  const columns = [
    "Patient Name", // Change from "Name" to "Patient Name"
    "Date", // Added "Date"
    "Score",
    "Diagnosis",
    "Prescription", // Added "Prescription"
  ];

  const renderDiagnosis = (diagnosisUrl) => (
    <button
      onClick={() => handleViewClick(diagnosisUrl)}
      className="view-button"
    >
      <img src={viewIcon} alt="View Diagnosis" />
    </button>
  );

  const renderPrescription = (prescriptionUrl) => (
    <button
      onClick={() => handleViewClick(prescriptionUrl)}
      className="view-button"
    >
      <img src={viewIcon} alt="View Prescription" />
    </button>
  );

  // Dummy data for dropdowns
  const dropdown1Options = ["Option 1", "Option 2", "Option 3"];
  const dropdown2Options = ["Choice A", "Choice B", "Choice C"];

  return (
    <div>
      <Navbar />
      <div className="table-container">
        <header className="main-header">Search Records</header>
        <div className="dropdown-container">
          {/* First Dropdown */}
          <select
            value={dropdown1Value}
            onChange={(e) => setDropdown1Value(e.target.value)}
          >
            <option value="">Select Option</option>
            {dropdown1Options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {/* Second Dropdown */}
          <select
            value={dropdown2Value}
            onChange={(e) => setDropdown2Value(e.target.value)}
          >
            <option value="">Select Choice</option>
            {dropdown2Options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Table
            columns={columns}
            data={tableData.map((row) => ({
              ...row,
              Diagnosis: renderDiagnosis(row.Diagnosis),
              Prescription: renderPrescription(row.Prescription),
            }))}
          />
        )}
      </div>
    </div>
  );
}

export default SearchRecords;
