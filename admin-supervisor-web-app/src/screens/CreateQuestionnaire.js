import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";

function CreateQuestionnaire() {
	const location = useLocation();
	console.log("Create: ", location.state.numberOfQuestions);

	return (
		<div>
			<Navbar />
			<PageHeading title="Create Questionnaire" />
			<div className="container"></div>
		</div>
	);
}

export default CreateQuestionnaire;
