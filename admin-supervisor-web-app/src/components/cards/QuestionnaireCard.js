import React from "react";
import "../css/QuestionnaireCard.css";

function QuestionnaireCard(props) {
	const { questionnaireData } = props;

	return (
		<div className="questionnaire-card">
			<div className="header-row">
				<h2 className="table-data">ID</h2>
				<h2 className="table-data">Name</h2>
				<h2 className="table-data">Status</h2>
				<h2 className="table-data">View Questionnaire</h2>
			</div>

			{questionnaireData.map((questionnaire, index) => (
				<div key={index} className="table-row">
					<h2 className="table-data">{questionnaire.id}</h2>
					<h2 className="table-data">{questionnaire.name}</h2>
					<h2 className="table-data">{questionnaire.status}</h2>
					<div className="eyeContainer">
						<button className="pink-btn">View</button>
					</div>
				</div>
			))}

			{/* {header === "true" && (
				<>
					<h1 className="table-heading">{id}</h1>
					<h1 className="table-heading">{name}</h1>
					<h1 className="table-heading">{status}</h1>
				</>
			)} */}

			{/* {header !== "true" && (
				<>
					<h1 className="table-data">{id}</h1>
					<h1 className="table-data">{name}</h1>
					<h1 className="table-data">{status}</h1>
				</>
			)} */}
		</div>
	);
}

export default QuestionnaireCard;
