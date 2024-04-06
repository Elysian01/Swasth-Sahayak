import React from "react";
import "./css/common.css";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import FeatureCard from "../components/cards/FeatureCard";

function AdminDashboard() {
	return (
		<div>
			<Navbar />
			<PageHeading title="Welcome to Admin Dashboard" />

			<div className="cards">
				<div className="row">
					<FeatureCard
						cardColor="blue"
						title="Doctor Dashboard"
						img="doctor.png"
						link="/doctor-dashboard"
					/>
					<FeatureCard
						cardColor="green"
						title="Field Worker Dashboard"
						img="field-worker.png"
						link="/field-worker-dashboard"
					/>
				</div>
				<div className="row">
					<FeatureCard
						cardColor="pinkesh-red"
						title="Supervisor Dashboard"
						img="supervisor.png"
						link="/supervisor-dashboard"
					/>
					<FeatureCard
						cardColor="dark"
						title="Questionnaire Dashboard"
						img="questionnaire.png"
						link="/questionnaire-dashboard"
					/>
				</div>
			</div>
		</div>
	);
}

export default AdminDashboard;
