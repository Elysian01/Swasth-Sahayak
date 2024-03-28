import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/tables/Listings";
import "./css/common.css";
import "./css/diagnoseRequest.css";

import Navbar from "../components/misc/Navbar";
import viewIcon from "../static/icons/eye.png";
import diagnoseImage from "../static/imgs/diagnose-request.png";

import { useSelector } from "react-redux";
import { getRequest } from "../components/Api/api";

function DiagnoseRequest() {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await getRequest(`/doctor/findall/${user}`, headers);
        setTableData(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChatClick = (chatUrl) => {
    window.open(chatUrl, "_blank");
  };

  const handleViewClick = (patientId) => {
    navigate("/patient-dashboard", { state: { patientId } });
  };
  const handleDashboard = () => {
    navigate("/doctor-dashboard");
  };
  const columns = ["User ID", "Name", "Chat", "View"];

  const renderChatButton = (chatUrl) => (
    <button
      onClick={() => handleChatClick(chatUrl)}
      className="small-primary-btn"
    >
      Chat
    </button>
  );

  const renderViewButton = (patientId) => (
    <button onClick={() => handleViewClick(patientId)} className="view-button">
      <img src={viewIcon} alt="View" />
    </button>
  );

  return (
    <div>
      <Navbar />
      <div className="page-setup">
        <div className="table-container">
          <header className="main-header">Patient Diagnose Request</header>
          <br/>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Table
              columns={columns}
              data={tableData.map((row) => ({
                "User ID": row.patientid,
                Name: row.name,
                Chat: renderChatButton(row.Chat),
                View: renderViewButton(row.patientid),
              }))}
            />
          )}
          <button className="pink-btn" onClick={handleDashboard}>
            Go back to dashboard
          </button>
        </div>
        <div className="diagnose-options">
          <img
            src={diagnoseImage}
            alt="diagnose-photo"
            className="diagnose-request"
          />
        </div>
      </div>
    </div>
  );
}

export default DiagnoseRequest;
