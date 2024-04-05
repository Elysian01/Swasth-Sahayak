import React, { useEffect, useState } from "react";
import Table from "../components/tables/Listings";
import axios from "axios";
import "./css/common.css";
import "./css/searchRecords.css";
import Navbar from "../components/misc/Navbar";
import viewIcon from "../static/icons/eye.png";

import { useSelector } from "react-redux";
import { getRequest } from "../components/Api/api";

function SearchRecords() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dropdown1Value, setDropdown1Value] = useState([]); // State for the first dropdown
  const [selectedDropdownValue, setSelectedDropdownValue] = useState(""); // State for selected dropdown value

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await getRequest("/doctor/diseasename", headers);
        setDropdown1Value(response); // Set dropdown1Value to the array of options
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Apply filters based on dropdown values
    const fetchFilteredData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await getRequest(`/doctor/searchbydisease/${selectedDropdownValue}`, headers);
        setTableData(response); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (selectedDropdownValue) {
      fetchFilteredData();
    }
  }, [selectedDropdownValue]);


  const handleViewClick = (viewUrl) => {
    window.open(viewUrl, "_blank");
  };

  const columns = [
    "Abha-id", 
    "Patient Name", 
    "Prescription Date",
    "Disease Name",
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

  return (
    <div>
      <Navbar />
      <div className="table-container">
        <header className="main-header">Search Records</header>
        <div className="dropdown-container">
          {/* First Dropdown */}
          <select
            value={selectedDropdownValue}
            onChange={(e) => setSelectedDropdownValue(e.target.value)}
          >
            <option value="">Select Disease Name</option>
            {dropdown1Value.map((option, index) => (
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
            data={tableData.map((row, index) => ({
              "Abha-id": row.abhaid,
              "Patient Name": row.patientname,
              "Prescription Date": row.prescriptiondate,
              "Disease Name": row.diseasename,
              "Diagnosis": renderDiagnosis(row.Diagnosis),
              "Prescription": renderPrescription(row.Prescription),
              key: index,
            }))}
          />
        )}
      </div>
    </div>
  );
}

export default SearchRecords;
