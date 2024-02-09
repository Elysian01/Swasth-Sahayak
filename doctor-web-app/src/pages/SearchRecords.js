import React, { useEffect, useState } from "react";
import Table from "../components/tables/Listings";
import axios from "axios";
import "./css/common.css";
import Navbar from "../components/misc/Navbar";
import viewIcon from "../static/icons/eye.png";

function SearchRecords() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    "Prescription" // Added "Prescription"
  ];

  const renderViewButton = (viewUrl) => (
    <button onClick={() => handleViewClick(viewUrl)} className="view-button">
      <img src={viewIcon} alt="View" />
    </button>
  );

  const renderDiagnosis = (diagnosisUrl) => (
    <button onClick={() => handleViewClick(diagnosisUrl)} className="view-button">
      <img src={viewIcon} alt="View Diagnosis" />
    </button>
  );

  const renderPrescription = (prescriptionUrl) => (
    <button onClick={() => handleViewClick(prescriptionUrl)} className="view-button">
      <img src={viewIcon} alt="View Prescription" />
    </button>
  );

  return (
    <div>
      <Navbar />
      <header className="main-header">Patient Diagnose Request</header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table
          columns={columns}
          data={tableData.map((row) => ({
            ...row,
            Diagnosis: renderDiagnosis(row.Diagnosis),
            Prescription: renderPrescription(row.Prescription)
          }))}
        />
      )}
    </div>
  );
}

export default SearchRecords;
