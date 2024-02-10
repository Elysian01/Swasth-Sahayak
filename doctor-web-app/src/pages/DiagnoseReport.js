import React, { useEffect, useState } from "react";
import Table from "../components/tables/Listings";
import axios from "axios";
import "./css/common.css";
import "../components/tables/Listings.css";
import Navbar from "../components/misc/Navbar";

// Import your diagnosis and prescription images
import diagnosisImage from "../static/icons/eye.png";
import prescriptionImage from "../static/icons/eye.png";

function DiagnoseReport() {
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

  const columns = [
    'Date',
    'Field Worker Assigned',
    'Questionnaire Score',
    'Diagnosis',
    'Prescription',
    'Comments'
  ]; 

  // Rendering function for Diagnosis column
  const renderDiagnosis = (diagnosisUrl) => (
    <button onClick={() => handleDiagnosisClick(diagnosisUrl)} className="view-button">
      <img src={diagnosisImage} alt="Diagnosis" />
    </button>
  );

  // Rendering function for Prescription column
  const renderPrescription = (prescriptionUrl) => (
    <button onClick={() => handlePrescriptionClick(prescriptionUrl)} className="view-button">
      <img src={prescriptionImage} alt="Prescription" />
    </button>
  );

  const handleDiagnosisClick = (diagnosisUrl) => {
    window.open(diagnosisUrl, "_blank");
  };

  const handlePrescriptionClick = (prescriptionUrl) => {
    window.open(prescriptionUrl, "_blank");
  };

  return (
    <div>
      <Navbar />
      <header className="main-header">Patient History</header>
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

export default DiagnoseReport;
