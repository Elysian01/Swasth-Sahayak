import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import Question from "../components/inputs/Question";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import PageHeading from "../components/headers/PageHeading";

const Questionnaire = (props) => {
	const QuestionnaireType = "default";
	// const QuestionnaireType = props.route.params["questionnaire-type"];
	// const patientAbhaId = props.route.params["patient-abhaid"];

	const [questionResponses, setQuestionResponses] = useState([]);

	function getQuestionnaire() {
		let data = require("../database/DOWNLOADED_DATA.json");
		if (data && data["questionnaire"][QuestionnaireType]) {
			return data["questionnaire"][QuestionnaireType];
		}
		console.log("Can't fetch Questionnaire");
		return false;
	}

	const questions = getQuestionnaire();

	function submitQuestionnaire() {
		console.log("Questionnaire submitted");
		console.log("Response: ", questionResponses);
	}

	function responseInput(response) {
		setQuestionResponses((prevResponses) => {
			const index = prevResponses.findIndex(
				(item) => item["question-id"] === response["question-id"]
			);
			if (index !== -1) {
				// Update if the question id exists
				const updatedResponses = [...prevResponses];
				updatedResponses[index] = response;
				return updatedResponses;
			} else {
				// Push if the question id doesn't exist
				return [...prevResponses, response];
			}
		});
		console.log("Response: ", response);
	}

	return (
		<ScrollView>
			<Navbar />
			<WorkerDetails />
			<PageHeading text="Questionnaire" />
			{/* <PageHeading text={lang[preferredlangauge]["Questionnaire"]} /> */}
			<View style={styles.line}></View>
			{questions.map((question, index) => (
				<Question
					key={index}
					question={question}
					responseInput={responseInput}
				/>
			))}
			<View style={styles.btn}>
				<Pressable
					onPress={submitQuestionnaire}
					style={AppStyles.primaryBtn}
				>
					{/* <Text style={AppStyles.primaryBtnText}>
						{lang[preferredlangauge]["Submit"]}
					</Text> */}
					<Text style={AppStyles.primaryBtnText}>Submit</Text>
				</Pressable>
			</View>
		</ScrollView>
	);
};

export default Questionnaire;

const styles = StyleSheet.create({
	line: {
		backgroundColor: "#000",
		height: 2,
		width: "80%",
		alignSelf: "center",
		marginBottom: 10,
	},
	btn: {
		alignSelf: "center",
		margin: 5,
	},
});
