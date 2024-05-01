import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { logout } from "../login/authSlice";
import Table from "../components/tables/Listings";
import "./css/common.css";
import "./css/profile.css";
import Navbar from "../components/misc/Navbar";
import viewIcon from "../static/icons/eye.png";
import doctorImage from "../static/imgs/doctor-page-profile-photo.png";
import { getRequest, postRequest } from "../components/Api/api";
function Profile() {
  const navigate = useNavigate();
  const [doctorDetails, setDoctorDetails] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
    const fetchDoctorDetails = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await postRequest(`/auth/logout`, token, headers);
        setDoctorDetails(response);
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };
    fetchDoctorDetails();
  };
  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await getRequest(
          `/doctor/getdoctordetails/${user}`,
          headers
        );
        setDoctorDetails(response);
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };

    fetchDoctorDetails();
  }, [user, token]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await getRequest(
          `/doctor/recentlytop3treated/${user}`,
          headers
        );
        setTableData(response);
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

  const columns = ["Patient Name", "Follow Update", "Disease"];

  const renderViewButton = (viewUrl) => (
    <button onClick={() => handleViewClick(viewUrl)} className="view-button">
      <img src={viewIcon} alt="View" />
    </button>
  );

  return (
    <div>
      {user && token && <Navbar />}
      <div className="page-setup">
        <div className="profile-options">
          <h1 className="profile-name">Profile</h1>
          <img src={doctorImage} alt="profile-photo" className="doctor-image" />
          <div className="doctor-name">
            {doctorDetails ? (
              doctorDetails.name
            ) : (
              <SkeletonTheme>
                <Skeleton
                  count={1}
                  style={{
                    borderRadius: "10px",
                    display: "flex",
                  }}
                />
              </SkeletonTheme>
            )}
          </div>
          <div className="qualification">
            {doctorDetails ? (
              doctorDetails.specialization
            ) : (
              <SkeletonTheme>
                <Skeleton
                  count={1}
                  style={{
                    borderRadius: "10px",
                    display: "flex",
                  }}
                />
              </SkeletonTheme>
            )}
          </div>

          <div className="button-arrangement">
            <button className="medium-primary-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className="table-container">
          <header className="main-header">Recently Diagnosed Patient</header>
          <br />
          <br />
          {loading ? (
            <SkeletonTheme>
              <Skeleton
                count={5}
                style={{
                  borderRadius: "10px",
                  display: "flex",
                  width: "80%",
                  margin: "auto",
                  alignItems: "center",
                }}
              />
            </SkeletonTheme>
          ) : (
            <Table
              columns={columns}
              data={tableData.map((row) => ({
                "Patient Name": row.patientname,
                "Follow Update": row.followupdate,
                Disease: row.disease,
              }))}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
