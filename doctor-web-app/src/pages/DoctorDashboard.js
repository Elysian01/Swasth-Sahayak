import "./css/common.css";
import "./css/doctor-dashboard.css";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Table from "../components/tables/Listings";
import Navbar from "../components/misc/Navbar";
import FeatureCard from "../components/cards/FeatureCard";
import StatisticCard from "../components/cards/StatisticCard";
import ShortListings from "../components/tables/ShortListings";

import viewIcon from "../static/icons/eye.png";
import { useSelector } from "react-redux";
import { getRequest } from "../components/Api/api";

function DoctorDashboard() {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  
  useEffect(() => {
    const fetchTop3Patients = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await getRequest(`/doctor/top3/${user}`, headers);
        setTableData(response); // Accessing data property of the response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTop3Patients();
  }, []);

  const handleChatClick = (chatUrl) => {
    window.open(chatUrl, "_blank");
  };

  const handleViewClick = (viewUrl) => {
    navigate("/diagnose-request");
  };

  const columns = ["Patient ID", "Name", "View Diagnose"];

  // const renderChatButton = (chatUrl) => (
  //   <button onClick={() => handleChatClick(chatUrl)} className="primary-btn">
  //     Chat
  //   </button>
  // );

  const renderViewButton = (viewUrl) => (
    <button onClick={() => handleViewClick(viewUrl)} className="view-button">
      <img src={viewIcon} alt="View" />
    </button>
  );

  return (
    <div>
      <Navbar />

      <main class="main-container">
        <div class="row1">
          <StatisticCard image="login-bg.png" />

          <div class="section2">
            <FeatureCard
              cardClass="col2"
              image="doctor-chat.png"
              title="Chat with a Doctor"
              btnText="Chat"
              link="/doctor-chat"
            />

            <FeatureCard
              cardClass="col3"
              image="search.png"
              title="Region & Disease"
              btnText="Search Records"
              link="/search-records"
            />
          </div>
        </div>
        <br />

        <div class="row2">
          <div class="col1">
            <ShortListings
              listingClass="section1"
              title="Appointments"
              noOfCards="3"
              link="/appointments"
            />

            <ShortListings
              listingClass="section2"
              title="Recently Treated"
              noOfCards="3"
              link="/recent-diagnose"
            />
          </div>
          <div class="col2" style={{ paddingLeft: "50px" }}>
            <h2>Patient Diagnosed Request</h2>
            <br />
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Table
                columns={columns}
                data={tableData.map((row) => ({
                  Name: row.name,
                  "Patient ID": row.patientid,
                  "View Diagnose": renderViewButton(row.View),
                }))}
              />
            )}
            <br />
            <button className="medium-primary-btn" onClick={handleViewClick}>
              View More
            </button>
          </div>
        </div>
      </main>
      <br />
      <br />
    </div>
  );
}

export default DoctorDashboard;
