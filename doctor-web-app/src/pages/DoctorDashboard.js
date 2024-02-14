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

	const handleChatClick = (chatUrl) => {
		window.open(chatUrl, "_blank");
	};

	const handleViewClick = (viewUrl) => {
		window.open(viewUrl, "_blank");
	};

	const columns = ["Name", "Questionnaire", "View Diagnose"];

	// const renderChatButton = (chatUrl) => (
	//   <button onClick={() => handleChatClick(chatUrl)} className="primary-btn">
	//     Chat
	//   </button>
	// );

	const renderViewButton = (viewUrl) => (
		<button
			onClick={() => handleViewClick(viewUrl)}
			className="view-button"
		>
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
									Questionnaire:
										row.questionnaire + "/30",
									"View Diagnose": renderViewButton(
										row.View
									),
								}))}
							/>
						)}
					</div>
				</div>
			</main>
			<br />
			<br />
		</div>
	);
}

export default DoctorDashboard;
