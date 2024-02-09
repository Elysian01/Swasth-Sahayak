import React, { useEffect, useState } from "react";
import Table from "../components/tables/Listings";
import axios from "axios";
import "./css/common.css";
import Navbar from "../components/misc/Navbar";
import viewIcon from "../static/icons/eye.png"

function DiagnoseRequest() {
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

  const handleChatClick = (chatUrl) => {
    window.open(chatUrl, "_blank");
  };

  const handleViewClick = (viewUrl) => {
    window.open(viewUrl, "_blank");
  };

  const columns = [
    "Name",
    "Questionnaire Score",
    "Appointment Date & Time",
    "Chat",
    "View"
  ];

  const renderChatButton = (chatUrl) => (
    <button onClick={() => handleChatClick(chatUrl)}className="chat-button">Chat</button>
  );

  const renderViewButton = (viewUrl) => (
    <button onClick={() => handleViewClick(viewUrl)}className="view-button">
        <img src={viewIcon} alt="View" />
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
            Chat: renderChatButton(row.Chat),
            View: renderViewButton(row.View)
          }))}
        />
      )}
    </div>
  );
}

export default DiagnoseRequest;
