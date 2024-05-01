import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  const pids = useSelector(state => state.auth.pids);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
        const day = String(currentDate.getDate()).padStart(2, "0");
        const date = `${year}-${month}-${day}`;
        const headers = { Authorization: `Bearer ${token}` };
        const response = await getRequest(`/doctor/findall/${user}/${date}`, headers);
        setTableData(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token,user]);

  const handleViewClick = (patientId) => {
    navigate("/patient-dashboard", { state: { patientId } });
  };
  const handleDashboard = () => {
    navigate("/doctor-dashboard");
  };
  const columns = ["User ID", "Name", "View"];
  const isPatientIdInPids = (patientId) => {
    return pids.includes(patientId);
  };
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
            <SkeletonTheme>
            <Skeleton
              count={6}
              style={{ borderRadius: "10px", display: "flex", height:'30px',width:'100%' }}
            />
          </SkeletonTheme>
          ) : (
            <Table
              columns={columns}
              data={tableData.filter(row => !isPatientIdInPids(row.patientid)).map((row) => ({
                "User ID": row.patientid,
                Name: row.name,
                // Chat: renderChatButton(row.Chat),
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
            alt="diagnose"
            className="diagnose-request"
          />
        </div>
      </div>
    </div>
  );
}

export default DiagnoseRequest;
