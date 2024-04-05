// it should be changed
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Table from "../components/tables/Listings";
import "./css/common.css";
import "../components/css/listings.css";
import "./css/patient-dashboard.css";
import Navbar from "../components/misc/Navbar";
// Import your diagnosis and prescription images
import diagnosisImage from "../static/icons/eye.png";
import prescriptionImage from "../static/icons/eye.png";

import { useSelector } from "react-redux";
import { getRequest } from "../components/Api/api";
import PatientProfileCard from "../components/cards/PatientProfileCard";
import CurrentDiagnosisCard from "../components/cards/CurrentDiagnosisCard";

function PatientDashboard() {
	const [tableData, setTableData] = useState([]);
	const [loading, setLoading] = useState(true);

  const token = useSelector((state) => state.auth.token);

	const location = useLocation();
  const { state } = location;
  const patientId = state ? state.patientId : null;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const headers = { Authorization: `Bearer ${token}` };
        const response = await getRequest(`/doctor/patientdashboard/${patientId}`, headers);
				setTableData(response);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const columns = [
		"Date",
		"Field Worker Assigned",
		"Diagnosis",
		"Comments",
	];

	// Rendering function for Diagnosis column
	const renderDiagnosis = (diagnosisUrl) => (
		<button
			onClick={() => handleDiagnosisClick(diagnosisUrl)}
			className="view-button"
		>
			<img src={diagnosisImage} alt="Diagnosis" />
		</button>
	);

	// Rendering function for Prescription column
	const renderPrescription = (prescriptionUrl) => (
		<button
			onClick={() => handlePrescriptionClick(prescriptionUrl)}
			className="view-button"
		>
			<img src={prescriptionImage} alt="Prescription" />
		</button>
	);

	const handleDiagnosisClick = (diagnosisUrl) => {
		window.open(diagnosisUrl, "_blank");
	};

	const handlePrescriptionClick = (prescriptionUrl) => {
		window.open(prescriptionUrl, "_blank");
	};

	return (
		<div>
			<Navbar />
			<div className="patient-detail">
				<div className="patients-profile">
					<header className="main-header">Patient Profile</header>
					<PatientProfileCard data={tableData}/>
				</div>
				<div className="current-diagnose">
					<header className="main-header">Current Diagnose</header>
					<CurrentDiagnosisCard data={tableData}/>
				</div>
			</div>
			
			<header className="main-header">Patient History</header>
			<br />

			{loading ? (
				<p>Loading...</p>
			) : (
				<Table
          columns={columns}
          data={tableData.prescription.map((prescription) => ({
            Date: prescription.dateofprescription,
            "Field Worker Assigned": prescription.feildworker,
            Diagnosis: tableData.address,
            Comments: prescription.doctorcomment,
          }))}
        />
			)}
		</div>
	);
}

export default PatientDashboard;
