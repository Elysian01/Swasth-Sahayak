import React from "react";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import QuestionnaireCard from "../components/cards/QuestionnaireCard";

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
	return (
		<div>
			<Navbar />
			<PageHeading title="Questionnaire Dashboard" />
			<div className="container">
				<div className="questionnaire-card-section">
					<QuestionnaireCard
						questionnaireData={questionnaireData}
					/>
					{/* <QuestionnaireCard
						id="1"
						header="false"
						status="active"
						name="Attention-deficit hyperactivity disorder, predominantly hyperactive type"
					/> */}
				</div>
			</div>
		</div>
	);
}

export default QuestionnaireDashboard;
