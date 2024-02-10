import React, { useEffect, useState } from "react";
import Table from "../components/tables/Listings";
import axios from "axios";
import "./css/common.css";
import Navbar from "../components/misc/Navbar";
import DownloadIcon from "../static/icons/DownloadPdf.png"

function Artifacts() {
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

  const handleDiagnosisClick = (chatUrl) => {
    window.open(chatUrl, "_blank");
  };

  const handlePrescriptionClick = (viewUrl) => {
    window.open(viewUrl, "_blank");
  };
  const handleDownloadClick = (viewUrl) => {
    window.open(viewUrl, "_blank");
  };

  const columns = [
    "Artifact ID",
    "Field Worker Assigned",
    "Date",
    "Score",
    "Diagnosis",
    "Prescription",
    "Download",
  ];
  

  const renderDiagnosisButton = (chatUrl) => (
    <button onClick={() => handleDiagnosisClick(chatUrl)}className="chat-button">View</button>
  );

  const renderPrescriptionButton = (viewUrl) => (
    <button onClick={() => handlePrescriptionClick(viewUrl)}className="chat-button">View</button>
  );
  const renderDownloadnButton = (viewUrl) => (
    <button onClick={() => handleDownloadClick(viewUrl)}className="download-button">
        <img src={DownloadIcon} alt="View" />
        </button>
  );

  return (
    <div>
      <Navbar />
      <header className="main-header">Artifacts</header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table
          columns={columns}
          data={tableData.map((row) => ({
            "Artifact ID": row.artifact_id,
            "Field Worker Assigned": row.field_worker_assigned,
            "Date": row.date,
            "Score": row.score,
            "Diagnosis": renderDiagnosisButton(row.diagnosis),
            "Prescription": renderPrescriptionButton(row.prescription),
            "Download": renderDownloadnButton(row.download)
          }))}
        />
      )}
    </div>
  );
}

export default Artifacts;
