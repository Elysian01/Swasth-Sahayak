import React, { useEffect, useState } from "react";
import Table from "../components/tables/Listings";
import axios from "axios";
import "./css/common.css";
import "./css/doctorDashboard.css";
import Navbar from "../components/misc/Navbar";
import viewIcon from "../static/icons/eye.png";

function DoctorDashboard() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9001/data");
        setTableData(response.data); // Accessing data property of the response
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
    "First Name",
    "Last Name",
    "VisitID",
    "Appointment Date & Time",
    "Status",
    "Disease",
    "View",
  ];

  const renderViewButton = (viewUrl) => (
    <button onClick={() => handleViewClick(viewUrl)} className="view-button">
      <img src={viewIcon} alt="View" />
    </button>
  );

  const getStatusClassName = (status) => {
    if (status === "cured") {
      return "status-cured"; // Apply CSS class for cured status
    } else if (status === "severe") {
      return "status-severe"; // Apply CSS class for severe status
    } else {
      return "status-on-going"; // No additional CSS class for other statuses
    }
  };

  return (
    <div>
      <Navbar />
      <header className="main-header">Recently Diagnosed Patient</header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table
          columns={columns}
          data={tableData.map((row) => ({
            "First Name": row.firstName,
            "Last Name": row.lastName,
            "VisitID": row.visitID,
            "Appointment Date & Time": row.appointmentDateTime,
            "Status": <span className={getStatusClassName(row.status)}>{row.status}</span>,
            "Disease": row.disease,
            "View": renderViewButton(row.view)
          }))}
        />
      )}
    </div>
  );
}

export default DoctorDashboard;
