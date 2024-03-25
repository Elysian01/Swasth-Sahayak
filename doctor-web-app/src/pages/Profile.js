import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../login/authSlice";
import Table from "../components/tables/Listings";
import axios from "axios";
import "./css/common.css";
import "./css/profile.css";
import Navbar from "../components/misc/Navbar";
import viewIcon from "../static/icons/eye.png";
import doctorImage from "../static/imgs/doctor-page-profile-photo.png";

function Profile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
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
              "appointmentDate": "2024-02-10",
              "status": "cured",
              "disease": "Flu",
              "view": "https://example.com"
            },
            {
              "firstName": "Alice",
              "lastName": "Smith",
              "visitID": 2,
              "appointmentDate": "2024-02-11",
              "status": "ongoing",
              "disease": "COVID-19",
              "view": "https://example.com"
            },
            {
              "firstName": "Bob",
              "lastName": "Johnson",
              "visitID": 3,
              "appointmentDate": "2024-02-12",
              "status": "severe",
              "disease": "Pneumonia",
              "view": "https://example.com"
            }
          ]
        };

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
    "Appointment Date",
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
          <div className="doctor-name">{user}</div>
          <div className="qualification">Neurosurgeon</div>
          
          <div className="button-arrangement">
            <button className="medium-primary-btn">Reset Password</button>
            <button className="medium-primary-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
        <div className="table-container">
          <header className="main-header">Recently Diagnosed Patient</header>
          <br />
          <br />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Table
              columns={columns}
              data={tableData.map((row) => ({
                "First Name": row.firstName,
                "Last Name": row.lastName,
                VisitID: row.visitID,
                "Appointment Date": row.appointmentDate,
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
