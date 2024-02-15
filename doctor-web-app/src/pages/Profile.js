import React, { useEffect, useState } from "react";
import Table from "../components/tables/Listings";
import axios from "axios";
import "./css/common.css";
import "./css/profile.css";
import Navbar from "../components/misc/Navbar";
import viewIcon from "../static/icons/eye.png";
import doctorImage from "../static/imgs/doctor-page-profile-photo.png";

function Profile() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("http://localhost:9001/data");
        const response = {
          "data": [
            {
              "firstName": "John",
              "lastName": "Doe",
              "visitID": 1,
              "appointmentDateTime": "2024-02-10T09:00:00",
              "status": "cured",
              "disease": "Flu",
              "view": "https://example.com"
            },
            {
              "firstName": "Alice",
              "lastName": "Smith",
              "visitID": 2,
              "appointmentDateTime": "2024-02-11T10:30:00",
              "status": "ongoing",
              "disease": "COVID-19",
              "view": "https://example.com"
            },
            {
              "firstName": "Bob",
              "lastName": "Johnson",
              "visitID": 3,
              "appointmentDateTime": "2024-02-12T13:45:00",
              "status": "severe",
              "disease": "Pneumonia",
              "view": "https://example.com"
            }
          ]
        }
        
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
      <div className="page-setup">
        <div className="profile-options">
          <h1 className="profile-name">Profile</h1>
          <img src={doctorImage} alt="profile-photo" className="doctor-image" />
          <div className="doctor-name">Aakash Bhardwaj</div>
          <div className="qualification">Neurosurgeon</div>
          <button className="purple-btn">Reset Password</button>
          <button className="purple-btn">Logout</button>
        </div>
        <div className="table-container">
          <header className="main-header">Recently Diagnosed Patient</header>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Table
              columns={columns}
              data={tableData.map((row) => ({
                "First Name": row.firstName,
                "Last Name": row.lastName,
                VisitID: row.visitID,
                "Appointment Date & Time": row.appointmentDateTime,
                Status: (
                  <span className={getStatusClassName(row.status)}>
                    {row.status}
                  </span>
                ),
                Disease: row.disease,
                View: renderViewButton(row.view),
              }))}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
