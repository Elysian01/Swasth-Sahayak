import React from "react";
import { useState } from "react";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import QuestionnaireCard from "../components/cards/QuestionnaireCard";

import { Link } from "react-router-dom";

function QuestionnaireDashboard() {
	const questionnaireData = [
		{
			id: 1,
			name: "Attention-deficit hyperactivity disorder, predominantly hyperactive type",
			status: "active",
		},
		{
			id: 2,
			name: "Bipolar disorder, current episode hypomanic",
			status: "active",
		},
		{
			id: 3,
			name: "Attention-deficit hyperactivity disorder, combined type",
			status: "inactive",
		},
	];

	const [searchedQuestionnaireName, setSearchedQuestionnaireName] =
		useState("");

	function setName(e) {
		setSearchedQuestionnaireName(e.target.value);
	}

	const searchQuestionnaire = async () => {
		console.log("Searching...");
	};

	function createQuestionnaire() {}
	return (
		<div>
			<Navbar />
			<PageHeading title="Questionnaire Dashboard" />
			<div className="container">
				<div className="search">
					<input
						className="search-input"
						type="text"
						placeholder="Enter Questionnaire Name"
						spellCheck={false}
						autoComplete="on"
						onChange={setName}
						value={searchedQuestionnaireName}
					/>
					<button className="search-btn">Search</button>
					<Link to="/questionnaire-configurations">
						<button
							onClick={createQuestionnaire}
							className="create-btn"
						>
							Create New Questionnaire
						</button>
					</Link>
				</div>
				{/* <div className="questionnaire-card-section">
					<QuestionnaireCard
						questionnaireData={questionnaireData}
					/>
				</div> */}
			</div>
		</div>
	);
}

export default QuestionnaireDashboard;
