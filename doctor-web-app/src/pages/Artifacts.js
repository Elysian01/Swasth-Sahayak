import React, { useEffect, useState } from "react";
import Table from "../components/tables/Listings";
import axios from "axios";
import "./css/common.css";
import Navbar from "../components/misc/Navbar";
import DownloadIcon from "../static/icons/DownloadPdf.png";

function Artifacts() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);

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
    <button onClick={() => handleDiagnosisClick(chatUrl)} className="pink-btn">
      View
    </button>
  );

  const renderPrescriptionButton = (viewUrl) => (
    <button
      onClick={() => handlePrescriptionClick(viewUrl)}
      className="pink-btn"
    >
      View
    </button>
  );

  const renderDownloadButton = (viewUrl) => (
    <button
      onClick={() => handleDownloadClick(viewUrl)}
      className="download-button"
    >
      <img src={DownloadIcon} alt="Download" />
    </button>
  );

  // Calculate total pages
  const totalPages = Math.ceil(tableData.length / perPage);

  // Get current entries for the current page
  const currentEntries = tableData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  // Function to handle next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <header className="main-header">Artifacts</header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table
          columns={columns}
          data={currentEntries.map((row) => ({
            "Artifact ID": row.artifact_id,
            "Field Worker Assigned": row.field_worker_assigned,
            Date: row.date,
            Score: row.score,
            Diagnosis: renderDiagnosisButton(row.diagnosis),
            Prescription: renderPrescriptionButton(row.prescription),
            Download: renderDownloadButton(row.download),
          }))}
        />
      )}
      <div style={{ textAlign: "center" }}>
        {tableData.length > perPage && currentPage > 1 && (
          <button className="pink-btn" onClick={prevPage}>
            Previous
          </button>
        )}
        {tableData.length > perPage && currentPage < totalPages && (
          <button className="pink-btn" onClick={nextPage}>
            Next
          </button>
        )}
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="pink-btn">Go back to patient dashboard</button>
      </div>
    </div>
  );
}

export default Artifacts;
