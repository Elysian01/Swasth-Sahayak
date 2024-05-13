import "./css/common.css";
import "./css/doctor-dashboard.css";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector,useDispatch } from "react-redux";

import Table from "../components/tables/Listings";
import Navbar from "../components/misc/Navbar";
import FeatureCard from "../components/cards/FeatureCard";
import StatisticCard from "../components/cards/StatisticCard";
import { getRequest } from "../components/Api/api";
import {setSendPatientId} from "../login/authSlice";
import viewIcon from "../static/icons/eye.png";

function DoctorDashboard() {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [latesttableData, setLatestTableData] = useState([]);
  const [countData, setCountData] = useState([]);
  const [countDataDate, setCountDateData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [columns, setcolumns] = useState([]);

  const dispatch=useDispatch();

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const pids = useSelector((state) => state.auth.pids);
  useEffect(() => {
    const fetchTop3Patients = async () => {
      try {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
        const day = String(currentDate.getDate()).padStart(2, "0");
        const date = `${year}-${month}-${day}`;
        const headers = { Authorization: `Bearer ${token}` };
        const response = await getRequest(
          `/doctor/findall/${user}/${date}`,
          headers
        );
        const column = ["Abha ID", "Patient ID", "Name", "View Diagnose"];
        console.log(response);
        setcolumns(column);
        setTableData(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTop3Patients();
  }, [token, user]);
  useEffect(() => {
    const findCount = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await getRequest(`/doctor/findcount/${user}`, headers);
        setCountData(response); // Accessing data property of the response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const latestTreatedPatients = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await getRequest(
          `/doctor/recentlytop3treated/${user}`,
          headers
        );
        setLatestTableData(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    latestTreatedPatients();
    findCount();
  }, [token, user]);
  useEffect(() => {
    const findCountDate = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
        const day = String(currentDate.getDate()).padStart(2, "0");
        const date = `${year}-${month}-${day}`;
        const response = await getRequest(
          `/doctor/findoldcount/${user}/${date}`,
          headers
        );
        setCountDateData(response); // Accessing data property of the response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    findCountDate();
  }, [token, user]);

  const handleViewClick = (abhaid,patientId) => {
    dispatch(setSendPatientId(patientId));
    console.log('patient id is '+patientId);
    navigate("/patient-dashboard", { state: { abhaid ,patientId} });
  };
  const handleViewMoreClick = () => {
    navigate("/diagnose-request");
  };

  const latestcolumns = ["Patient Name", "Follow Update", "Disease"];
  const isPatientIdInPids = (patientId) => {
    return pids.includes(patientId);
  };
  const renderViewButton = (abhaid,patientId) => (
    <button onClick={() => handleViewClick(abhaid,patientId)} className="view-button">
      <img src={viewIcon} alt="View" />
    </button>
  );

  return (
    <div>
      <Navbar />
      <main class="main-container">
        <div class="row1">
          <StatisticCard countData={countData} countDataDate={countDataDate} />

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
          <div class="col2">
            <h2>Latest Treated Patient</h2>
            <br />
            <Table
              columns={latestcolumns}
              data={latesttableData.map((row) => ({
                "Patient Name": row.patientname,
                "Follow Update": row.followupdate,
                Disease: row.disease,
              }))}
            />
          </div>
          <div class="col2">
            <h2>Patient Diagnosed Request</h2>
            <br />
            {loading ? (
              <SkeletonTheme>
                <Skeleton
                  count={4}
                  style={{
                    borderRadius: "10px",
                    display: "flex",
                    height: "30px",
                    width: "100%",
                  }}
                />
              </SkeletonTheme>
            ) : (
              <Table
                columns={columns}
                data={
                  tableData
                    .filter((row) => !isPatientIdInPids(row.patientid))
                    .map((row) => ({
                      "Abha ID": row.abhaid,
                      Name: row.name,
                      "Patient ID": row.patientid,
                      "View Diagnose": renderViewButton(row.abhaid, row.patientid),
                    }))
                    .slice(0, 3) // This limits the entries to only the first three
                }
              />
            )}
            <br />
            <button
              className="medium-primary-btn"
              onClick={handleViewMoreClick}
            >
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
