// it should be changed
import React, { useEffect, useState } from "react";
import Table from "../components/tables/Listings";
import axios from "axios";
import "./css/common.css";
import "../components/css/listings.css";
import Navbar from "../components/misc/Navbar";
// Import your diagnosis and prescription images
import diagnosisImage from "../static/icons/eye.png";
import prescriptionImage from "../static/icons/eye.png";
// import { Chart } from "chart.js";
import LineGraph from "../components/misc/LineGraph";

function DiagnoseReport() {
	const [tableData, setTableData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:9001/data"
				);
				setTableData(response.data);
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
		"Questionnaire Score",
		"Diagnosis",
		"Prescription",
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
			<h1 className="main-header">Patient Progress</h1>
			<div className="line-graph">
				<LineGraph />
			</div>
			<header className="main-header">Patient History</header>
			<br />

			{loading ? (
				<p>Loading...</p>
			) : (
				<Table
					columns={columns}
					data={tableData.map((row) => ({
						...row,
						Diagnosis: renderDiagnosis(row.Diagnosis),
						Prescription: renderPrescription(
							row.Prescription
						),
					}))}
				/>
			)}
		</div>
	);
}

export default DiagnoseReport;
