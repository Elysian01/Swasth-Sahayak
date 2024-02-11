import "./css/common.css";
import "./css/doctor-dashboard.css";

import axios from "axios";
import React, { useEffect, useState } from "react";

import Table from "../components/tables/Listings";
import Navbar from "../components/misc/Navbar";
import FeatureCard from "../components/cards/FeatureCard";
import StatisticCard from "../components/cards/StatisticCard";
import ShortListings from "../components/tables/ShortListings";

import viewIcon from "../static/icons/eye.png";

function DoctorDashboard() {
	const [tableData, setTableData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:9001/data"
				);
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
		<button
			onClick={() => handleViewClick(viewUrl)}
			className="view-button"
		>
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

			<main class="main-container">
				<div class="row1">
					<StatisticCard image="login-bg.png" />

					<div class="section2">
						<FeatureCard
							cardClass="col2"
							image="doctor-chat.png"
							title="Chat with a Doctor"
							btnText="Chat"
						/>

						<FeatureCard
							cardClass="col3"
							image="search.png"
							title="Region & Disease"
							btnText="Search Records"
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
						/>

						<ShortListings
							listingClass="section2"
							title="Recently Diagnosed"
							noOfCards="3"
						/>
					</div>
					<div class="col2">
						<h2>Recently Diagnosed Patient</h2>
						{/* {loading ? (
							<p>Loading...</p>
						) : (
							<Table
								columns={columns}
								data={tableData.map((row) => ({
									"First Name": row.firstName,
									"Last Name": row.lastName,
									VisitID: row.visitID,
									"Appointment Date & Time":
										row.appointmentDateTime,
									Status: (
										<span
											className={getStatusClassName(
												row.status
											)}
										>
											{row.status}
										</span>
									),
									Disease: row.disease,
									View: renderViewButton(row.view),
								}))}
							/>
						)} */}
					</div>
				</div>
			</main>
			<br />
			<br />
		</div>
	);
}

export default DoctorDashboard;
