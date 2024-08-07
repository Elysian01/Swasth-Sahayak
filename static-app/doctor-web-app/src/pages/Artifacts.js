import React, { useEffect, useState } from "react";
import Table from "../components/tables/Listings";
import axios from "axios";
import "./css/common.css";
import Navbar from "../components/misc/Navbar";
import DownloadIcon from "../static/icons/DownloadPdf.png";

function Artifacts() {
	const [tableData, setTableData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage] = useState(5);

	useEffect(() => {
		const fetchData = async () => {
			try {
				//const response = await axios.get("http://localhost:9001/data");
				const response = {
					data: [
						{
							artifact_id: 1,
							field_worker_assigned: "John",
							date: "2024-02-10",
							score: "88,110",
							diagnosis: "https://example.com/diagnosis1",
							prescription:
								"https://example.com/prescription1",
							download: "https://example.com/download1",
						},
						{
							artifact_id: 2,
							field_worker_assigned: "Alice",
							date: "2024-02-11",
							score: "72,400",
							diagnosis: "https://example.com/diagnosis2",
							prescription:
								"https://example.com/prescription2",
							download: "https://example.com/download2",
						},
						{
							artifact_id: 3,
							field_worker_assigned: "Bob",
							date: "2024-02-12",
							score: "52,300",
							diagnosis: "https://example.com/diagnosis3",
							prescription:
								"https://example.com/prescription3",
							download: "https://example.com/download3",
						},
						{
							artifact_id: 4,
							field_worker_assigned: "Alice",
							date: "2024-02-13",
							score: "65,220",
							diagnosis: "https://example.com/diagnosis4",
							prescription:
								"https://example.com/prescription4",
							download: "https://example.com/download4",
						},
						{
							artifact_id: 5,
							field_worker_assigned: "John",
							date: "2024-02-14",
							score: "72,150",
							diagnosis: "https://example.com/diagnosis5",
							prescription:
								"https://example.com/prescription5",
							download: "https://example.com/download5",
						},
						{
							artifact_id: 6,
							field_worker_assigned: "Bob",
							date: "2024-02-15",
							score: "82,430",
							diagnosis: "https://example.com/diagnosis6",
							prescription:
								"https://example.com/prescription6",
							download: "https://example.com/download6",
						},
						{
							artifact_id: 7,
							field_worker_assigned: "Alice",
							date: "2024-02-16",
							score: "76,310",
							diagnosis: "https://example.com/diagnosis7",
							prescription:
								"https://example.com/prescription7",
							download: "https://example.com/download7",
						},
						{
							artifact_id: 8,
							field_worker_assigned: "John",
							date: "2024-02-17",
							score: "95,280",
							diagnosis: "https://example.com/diagnosis8",
							prescription:
								"https://example.com/prescription8",
							download: "https://example.com/download8",
						},
						{
							artifact_id: 9,
							field_worker_assigned: "Bob",
							date: "2024-02-18",
							score: "60,390",
							diagnosis: "https://example.com/diagnosis9",
							prescription:
								"https://example.com/prescription9",
							download: "https://example.com/download9",
						},
						{
							artifact_id: 10,
							field_worker_assigned: "Alice",
							date: "2024-02-19",
							score: "78,210",
							diagnosis: "https://example.com/diagnosis10",
							prescription:
								"https://example.com/prescription10",
							download: "https://example.com/download10",
						},
						{
							artifact_id: 11,
							field_worker_assigned: "John",
							date: "2024-02-20",
							score: "85,340",
							diagnosis: "https://example.com/diagnosis11",
							prescription:
								"https://example.com/prescription11",
							download: "https://example.com/download11",
						},
						{
							artifact_id: 12,
							field_worker_assigned: "Bob",
							date: "2024-02-21",
							score: "92,280",
							diagnosis: "https://example.com/diagnosis12",
							prescription:
								"https://example.com/prescription12",
							download: "https://example.com/download12",
						},
						{
							artifact_id: 13,
							field_worker_assigned: "Alice",
							date: "2024-02-22",
							score: "67,150",
							diagnosis: "https://example.com/diagnosis13",
							prescription:
								"https://example.com/prescription13",
							download: "https://example.com/download13",
						},
						{
							artifact_id: 14,
							field_worker_assigned: "John",
							date: "2024-02-23",
							score: "79,190",
							diagnosis: "https://example.com/diagnosis14",
							prescription:
								"https://example.com/prescription14",
							download: "https://example.com/download14",
						},
						{
							artifact_id: 15,
							field_worker_assigned: "Bob",
							date: "2024-02-24",
							score: "68,250",
							diagnosis: "https://example.com/diagnosis15",
							prescription:
								"https://example.com/prescription15",
							download: "https://example.com/download15",
						},
						{
							artifact_id: 16,
							field_worker_assigned: "Alice",
							date: "2024-02-25",
							score: "83,290",
							diagnosis: "https://example.com/diagnosis16",
							prescription:
								"https://example.com/prescription16",
							download: "https://example.com/download16",
						},
						{
							artifact_id: 17,
							field_worker_assigned: "John",
							date: "2024-02-26",
							score: "70,180",
							diagnosis: "https://example.com/diagnosis17",
							prescription:
								"https://example.com/prescription17",
							download: "https://example.com/download17",
						},
						{
							artifact_id: 18,
							field_worker_assigned: "Bob",
							date: "2024-02-27",
							score: "75,310",
							diagnosis: "https://example.com/diagnosis18",
							prescription:
								"https://example.com/prescription18",
							download: "https://example.com/download18",
						},
						{
							artifact_id: 19,
							field_worker_assigned: "Alice",
							date: "2024-02-28",
							score: "95,280",
							diagnosis: "https://example.com/diagnosis19",
							prescription:
								"https://example.com/prescription19",
							download: "https://example.com/download19",
						},
						{
							artifact_id: 20,
							field_worker_assigned: "John",
							date: "2024-02-29",
							score: "87,270",
							diagnosis: "https://example.com/diagnosis20",
							prescription:
								"https://example.com/prescription20",
							download: "https://example.com/download20",
						},
						{
							artifact_id: 21,
							field_worker_assigned: "Bob",
							date: "2024-03-01",
							score: "62,340",
							diagnosis: "https://example.com/diagnosis21",
							prescription:
								"https://example.com/prescription21",
							download: "https://example.com/download21",
						},
						{
							artifact_id: 22,
							field_worker_assigned: "Alice",
							date: "2024-03-02",
							score: "75,230",
							diagnosis: "https://example.com/diagnosis22",
							prescription:
								"https://example.com/prescription22",
							download: "https://example.com/download22",
						},
						{
							artifact_id: 23,
							field_worker_assigned: "John",
							date: "2024-03-03",
							score: "80,290",
							diagnosis: "https://example.com/diagnosis23",
							prescription:
								"https://example.com/prescription23",
							download: "https://example.com/download23",
						},
						{
							artifact_id: 24,
							field_worker_assigned: "Bob",
							date: "2024-03-04",
							score: "78,180",
							diagnosis: "https://example.com/diagnosis24",
							prescription:
								"https://example.com/prescription24",
							download: "https://example.com/download24",
						},
						{
							artifact_id: 25,
							field_worker_assigned: "Alice",
							date: "2024-03-05",
							score: "92,320",
							diagnosis: "https://example.com/diagnosis25",
							prescription:
								"https://example.com/prescription25",
							download: "https://example.com/download25",
						},
						{
							artifact_id: 26,
							field_worker_assigned: "John",
							date: "2024-03-06",
							score: "71,250",
							diagnosis: "https://example.com/diagnosis26",
							prescription:
								"https://example.com/prescription26",
							download: "https://example.com/download26",
						},
						{
							artifact_id: 27,
							field_worker_assigned: "Bob",
							date: "2024-03-07",
							score: "86,270",
							diagnosis: "https://example.com/diagnosis27",
							prescription:
								"https://example.com/prescription27",
							download: "https://example.com/download27",
						},
						{
							artifact_id: 28,
							field_worker_assigned: "Alice",
							date: "2024-03-08",
							score: "64,310",
							diagnosis: "https://example.com/diagnosis28",
							prescription:
								"https://example.com/prescription28",
							download: "https://example.com/download28",
						},
						{
							artifact_id: 29,
							field_worker_assigned: "John",
							date: "2024-03-09",
							score: "83,180",
							diagnosis: "https://example.com/diagnosis29",
							prescription:
								"https://example.com/prescription29",
							download: "https://example.com/download29",
						},
						{
							artifact_id: 30,
							field_worker_assigned: "Bob",
							date: "2024-03-10",
							score: "90,340",
							diagnosis: "https://example.com/diagnosis30",
							prescription:
								"https://example.com/prescription30",
							download: "https://example.com/download30",
						},
						{
							artifact_id: 31,
							field_worker_assigned: "Alice",
							date: "2024-03-11",
							score: "68,230",
							diagnosis: "https://example.com/diagnosis31",
							prescription:
								"https://example.com/prescription31",
							download: "https://example.com/download31",
						},
						{
							artifact_id: 32,
							field_worker_assigned: "John",
							date: "2024-03-12",
							score: "77,290",
							diagnosis: "https://example.com/diagnosis32",
							prescription:
								"https://example.com/prescription32",
							download: "https://example.com/download32",
						},
						{
							artifact_id: 33,
							field_worker_assigned: "Bob",
							date: "2024-03-13",
							score: "85,180",
							diagnosis: "https://example.com/diagnosis33",
							prescription:
								"https://example.com/prescription33",
							download: "https://example.com/download33",
						},
						{
							artifact_id: 34,
							field_worker_assigned: "Alice",
							date: "2024-03-14",
							score: "62,320",
							diagnosis: "https://example.com/diagnosis34",
							prescription:
								"https://example.com/prescription34",
							download: "https://example.com/download34",
						},
						{
							artifact_id: 35,
							field_worker_assigned: "John",
							date: "2024-03-15",
							score: "79,250",
							diagnosis: "https://example.com/diagnosis35",
							prescription:
								"https://example.com/prescription35",
							download: "https://example.com/download35",
						},
						{
							artifact_id: 36,
							field_worker_assigned: "Bob",
							date: "2024-03-16",
							score: "94,270",
							diagnosis: "https://example.com/diagnosis36",
							prescription:
								"https://example.com/prescription36",
							download: "https://example.com/download36",
						},
						{
							artifact_id: 37,
							field_worker_assigned: "Alice",
							date: "2024-03-17",
							score: "73,310",
							diagnosis: "https://example.com/diagnosis37",
							prescription:
								"https://example.com/prescription37",
							download: "https://example.com/download37",
						},
						{
							artifact_id: 38,
							field_worker_assigned: "John",
							date: "2024-03-18",
							score: "82,180",
							diagnosis: "https://example.com/diagnosis38",
							prescription:
								"https://example.com/prescription38",
							download: "https://example.com/download38",
						},
						{
							artifact_id: 39,
							field_worker_assigned: "Bob",
							date: "2024-03-19",
							score: "69,340",
							diagnosis: "https://example.com/diagnosis39",
							prescription:
								"https://example.com/prescription39",
							download: "https://example.com/download39",
						},
						{
							artifact_id: 40,
							field_worker_assigned: "Alice",
							date: "2024-03-20",
							score: "87,230",
							diagnosis: "https://example.com/diagnosis40",
							prescription:
								"https://example.com/prescription40",
							download: "https://example.com/download40",
						},
						{
							artifact_id: 41,
							field_worker_assigned: "John",
							date: "2024-03-21",
							score: "90,290",
							diagnosis: "https://example.com/diagnosis41",
							prescription:
								"https://example.com/prescription41",
							download: "https://example.com/download41",
						},
						{
							artifact_id: 42,
							field_worker_assigned: "Bob",
							date: "2024-03-22",
							score: "74,180",
							diagnosis: "https://example.com/diagnosis42",
							prescription:
								"https://example.com/prescription42",
							download: "https://example.com/download42",
						},
						{
							artifact_id: 43,
							field_worker_assigned: "Alice",
							date: "2024-03-23",
							score: "81,320",
							diagnosis: "https://example.com/diagnosis43",
							prescription:
								"https://example.com/prescription43",
							download: "https://example.com/download43",
						},
						{
							artifact_id: 44,
							field_worker_assigned: "John",
							date: "2024-03-24",
							score: "68,250",
							diagnosis: "https://example.com/diagnosis44",
							prescription:
								"https://example.com/prescription44",
							download: "https://example.com/download44",
						},
						{
							artifact_id: 45,
							field_worker_assigned: "Bob",
							date: "2024-03-25",
							score: "93,270",
							diagnosis: "https://example.com/diagnosis45",
							prescription:
								"https://example.com/prescription45",
							download: "https://example.com/download45",
						},
						{
							artifact_id: 46,
							field_worker_assigned: "Alice",
							date: "2024-03-26",
							score: "72,310",
							diagnosis: "https://example.com/diagnosis46",
							prescription:
								"https://example.com/prescription46",
							download: "https://example.com/download46",
						},
						{
							artifact_id: 47,
							field_worker_assigned: "John",
							date: "2024-03-27",
							score: "88,180",
							diagnosis: "https://example.com/diagnosis47",
							prescription:
								"https://example.com/prescription47",
							download: "https://example.com/download47",
						},
						{
							artifact_id: 48,
							field_worker_assigned: "Bob",
							date: "2024-03-28",
							score: "66,340",
							diagnosis: "https://example.com/diagnosis48",
							prescription:
								"https://example.com/prescription48",
							download: "https://example.com/download48",
						},
						{
							artifact_id: 49,
							field_worker_assigned: "Alice",
							date: "2024-03-29",
							score: "85,230",
							diagnosis: "https://example.com/diagnosis49",
							prescription:
								"https://example.com/prescription49",
							download: "https://example.com/download49",
						},
						{
							artifact_id: 50,
							field_worker_assigned: "John",
							date: "2024-03-30",
							score: "74,290",
							diagnosis: "https://example.com/diagnosis50",
							prescription:
								"https://example.com/prescription50",
							download: "https://example.com/download50",
						},
					],
				};

				setTableData(response.data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const handleDiagnosisClick = (chatUrl) => {
		window.open(chatUrl, "_blank");
	};

	const handlePrescriptionClick = (viewUrl) => {
		window.open(viewUrl, "_blank");
	};

	const handleDownloadClick = (viewUrl) => {
		window.open(viewUrl, "_blank");
	};

	const columns = [
		"Artifact ID",
		"Field Worker Assigned",
		"Date",
		"Score",
		"Diagnosis",
		"Prescription",
		"Download",
	];

	const renderDiagnosisButton = (chatUrl) => (
		<button
			onClick={() => handleDiagnosisClick(chatUrl)}
			className="pink-btn"
		>
			View
		</button>
	);

	const renderPrescriptionButton = (viewUrl) => (
		<button
			onClick={() => handlePrescriptionClick(viewUrl)}
			className="pink-btn"
		>
			View
		</button>
	);

	const renderDownloadButton = (viewUrl) => (
		<button
			onClick={() => handleDownloadClick(viewUrl)}
			className="download-button"
		>
			<img src={DownloadIcon} alt="Download" />
		</button>
	);

	// Calculate total pages
	const totalPages = Math.ceil(tableData.length / perPage);

	// Get current entries for the current page
	const currentEntries = tableData.slice(
		(currentPage - 1) * perPage,
		currentPage * perPage
	);

	// Function to handle next page
	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	// Function to handle previous page
	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<div>
			<Navbar />
			<header className="main-header">Artifacts</header>
			<br />
			{loading ? (
				<p>Loading...</p>
			) : (
				<Table
					columns={columns}
					data={currentEntries.map((row) => ({
						"Artifact ID": row.artifact_id,
						"Field Worker Assigned":
							row.field_worker_assigned,
						Date: row.date,
						Score: row.score,
						Diagnosis: renderDiagnosisButton(row.diagnosis),
						Prescription: renderPrescriptionButton(
							row.prescription
						),
						Download: renderDownloadButton(row.download),
					}))}
				/>
			)}
			<div style={{ textAlign: "center" }}>
				{tableData.length > perPage && currentPage > 1 && (
					<button className="pink-btn" onClick={prevPage}>
						Previous
					</button>
				)}
				{tableData.length > perPage && currentPage < totalPages && (
					<button className="pink-btn" onClick={nextPage}>
						Next
					</button>
				)}
			</div>
			<div style={{ textAlign: "center" }}>
				<button className="pink-btn">
					Go back to patient dashboard
				</button>
			</div>
		</div>
	);
}

export default Artifacts;
