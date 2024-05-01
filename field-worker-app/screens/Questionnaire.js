import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
	Alert,
	TextInput,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Question from "../components/inputs/Question";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import PageHeading from "../components/headers/PageHeading";
import AppStyles from "../AppStyles";
import { lang } from "../database/language";

const Questionnaire = (props) => {
	const navigation = useNavigation();

	const [questionnaireType, setQuestionnaireType] = useState("ACTIVITY");
	const [questionnaire, setQuestionnaire] = useState([]);
	const [patientAbhaId, setPatientAbhaId] = useState("15615");
	const [questionResponses, setQuestionResponses] = useState([]);
	const [preferredLanguage, setPreferredLanguage] = useState("English");
	const [fieldWorkerComments, setFieldWorkerComments] = useState("");

	useEffect(() => {
		// Retrieve patient-abhaid and new-patient from props
		setPatientAbhaId(props.route.params["patient_abhaid"]);
		setQuestionnaireType(props.route.params["questionnaire_type"]);
		console.log("Type: ", questionnaireType); // Check if this logs the correct value
		getQuestionnaire().then((result) => {
			console.log("Questionnaire Result: ", result);
			setQuestionnaire(result);
		});
	}, [props.route.params, questionnaireType]); // Added questionnaireType as a dependency

	useEffect(() => {
		// Retrieve language from AsyncStorage
		AsyncStorage.getItem("Language").then((lang) => {
			if (lang) {
				setPreferredLanguage(lang);
			}
		});
	}, []);

	function getDate() {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, "0");
		var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		var yyyy = today.getFullYear();

		today = dd + "-" + mm + "-" + yyyy;
		return today;
	}


	const submitQuestionnaire = async () => {
		console.log("Response: ", questionResponses);
		console.log("Field Worker Comments: ", fieldWorkerComments);

		const fieldWorkerData = {
			patient_abhaid: patientAbhaId,
			comment: fieldWorkerComments,
			date: getDate(),
		};

		const questionnaireData = {
			patient_abhaid: patientAbhaId,
			questionnaire_type: questionnaireType,
			responses: questionResponses,
		};

		try {
			let uploadData = await AsyncStorage.getItem("uploadData");
			uploadData = JSON.parse(uploadData);
			uploadData["fieldworker_comments"].push(fieldWorkerData);

			// Stringify questionnaireData's responses here
			questionnaireData.responses = JSON.stringify(
				questionnaireData.responses
			);

			uploadData["questionnaire_response"] = [
				...uploadData["questionnaire_response"],
				questionnaireData,
			];

			console.log("Updated Upload data: ", uploadData);

			await AsyncStorage.setItem(
				"uploadData",
				JSON.stringify(uploadData)
			);
			console.log("Questionnaire submitted");
			await AsyncStorage.setItem("DataChangeStatus", "true");

			navigation.navigate("DoctorSelection", {
				patient_abhaid: patientAbhaId,
			});
		} catch (error) {
			console.error("Error saving data, please retry:", error);
			Alert.alert("Error", "Error saving data");
		}
	};

	function responseInput(response) {
		setQuestionResponses((prevResponses) => {
			const index = prevResponses.findIndex(
				(item) => item["question_id"] === response["question_id"]
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
	}

	function handlefieldWorkerComments(text) {
		setFieldWorkerComments(text);
	}

	const getQuestionnaire = async () => {
		// let data = require("../database/DOWNLOADED_DATA.json");
		let data = await AsyncStorage.getItem("DownloadedData");
		if (data) {
			data = JSON.parse(data);
			console.log("Loading Questionnaire: ", questionnaireType);
			let filteredQuestionnaire = data["questionnaire"].find(
				(entry) => entry.icd10 === questionnaireType
			);
			if (filteredQuestionnaire) {
				return filteredQuestionnaire;
			} else {
				console.log(
					"No questionnaire found for the provided icd10 code"
				);
				return [];
			}
		}
		console.log("Can't fetch Questionnaire");
		return [];
	};

	// useEffect(() => {
	// 	setQuestionnaire(getQuestionnaire());
	// }, [questionnaire]);

	const renderQuestions = () => {
		if (questionnaireType) {
			console.log("Q: ", questionnaire);
			if (questionnaire.length === 0) {
				return null;
			}

			const questions = questionnaire.questions;
			console.log(questions);

			if (questions.length > 0) {
				return questions.map((question, index) => (
					<View key={index}>
						<Question
							key={question.question_id}
							questionObject={question}
							responseInput={responseInput}
						/>
					</View>
				));
			}
		} else {
			Alert("Error", "Questionnaire Not Available");
		}
	};

	function goToAddImagesScreen() {
		navigation.navigate("AddImages", {
			patient_abhaid: patientAbhaId,
		});
	}

	return (
		<ScrollView automaticallyAdjustKeyboardInsets={true}>
			<Navbar />
			<WorkerDetails />
			{/* <PageHeading text="Questionnaire" /> */}
			<PageHeading text={lang[preferredLanguage]["Questionnaire"]} />
			<View style={AppStyles.line}></View>
			{renderQuestions()}

			<View style={AppStyles.btn}>
				<Pressable
					onPress={goToAddImagesScreen}
					style={AppStyles.goldBtn}
				>
					{/* <Text style={AppStyles.primaryBtnText}>
						{lang[preferredLanguage]["Add Images"]}
					</Text> */}
					<Text style={AppStyles.primaryBtnText}>
						Add Images
					</Text>
					{/* <Text style={AppStyles.primaryBtnText}>Submit</Text> */}
				</Pressable>
			</View>

			<View style={styles.fieldWorkerComments}>
				<Text style={AppStyles.subHeading}>
					Field Worker Comments
				</Text>
				<TextInput
					style={styles.textInput}
					inputMode="text"
					placeholder="Enter your comments for doctor to review"
					placeholderTextColor="gray"
					onChangeText={handlefieldWorkerComments}
					value={fieldWorkerComments}
				/>
			</View>

			<View style={AppStyles.btn}>
				<Pressable
					onPress={submitQuestionnaire}
					style={AppStyles.primaryBtn}
				>
					<Text style={AppStyles.primaryBtnText}>
						{lang[preferredLanguage]["Submit"]}
					</Text>
					{/* <Text style={AppStyles.primaryBtnText}>Submit</Text> */}
				</Pressable>
			</View>
		</ScrollView>
	);
};

export default Questionnaire;

const styles = StyleSheet.create({
	fieldWorkerComments: {
		display: "flex",
		width: "80%",
		alignSelf: "center",
	},
	textInput: {
		padding: 25,
		borderRadius: 10,
		backgroundColor: "white",
		fontSize: 18,
		height: 200,
	},
});
