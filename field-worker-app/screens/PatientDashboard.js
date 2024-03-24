import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	Pressable,
	StyleSheet,
	Image,
	ScrollView,
	Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import OngoingMedicationOrders from "../components/misc/OngoingMedicationOrders";
import DiagnoseHistory from "../components/misc/DiagnoseHistory";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import PageHeading from "../components/headers/PageHeading";
import AppStyles from "../AppStyles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../database/language";

const PatientDashboard = (props) => {
	const navigation = useNavigation();

	const [details, setDetails] = useState(null);
	const [preferredLanguage, setPreferredLanguage] = useState("English");
	const [patientAbhaId, setPatientAbhaId] = useState(null);
	const [newPatient, setNewPatient] = useState(null);

	useEffect(() => {
		// Retrieve patient-abhaid and new-patient from props
		const {
			"patient-abhaid": patientAbhaIdProp,
			"new-patient": newPatientProp,
		} = props.route.params;
		setPatientAbhaId(patientAbhaIdProp);
		setNewPatient(newPatientProp);
	}, [props.route.params]);

	useEffect(() => {
		// Fetch patient details when patientAbhaId changes
		if (patientAbhaId && !newPatient) {
			const data = require("../database/DOWNLOADED_DATA.json");
			const foundDetail = data["patient-details"].find(
				(detail) => detail["patient-abhaid"] === patientAbhaId
			);
			if (foundDetail) {
				setDetails(foundDetail);
			} else {
				Alert.alert(
					"Error",
					"Patient Details could not be fetched"
				);
			}
		}
	}, [patientAbhaId, newPatient]);

	useEffect(() => {
		// Retrieve language from AsyncStorage
		AsyncStorage.getItem("Language").then((lang) => {
			if (lang) {
				setPreferredLanguage(lang);
			}
		});
	}, []);

	function goToDefaultQuestionnaire() {
		navigation.navigate("Questionnaire", {
			"questionnaire-type": "default",
			"patient-abhaid": patientAbhaId,
		});
	}

	if (newPatient) {
		return (
			<ScrollView automaticallyAdjustKeyboardInsets={true}>
				<Navbar />
				<WorkerDetails />
				<PageHeading
					text={lang[preferredLanguage]["Patient Dashboard"]}
				/>
				<View style={styles.line}></View>
				<View style={styles.btn}>
					<Text style={styles.info}>
						No Data, Please go ask questionnaire
					</Text>
					<Pressable
						onPress={goToDefaultQuestionnaire}
						style={AppStyles.primaryBtn}
					>
						<Text style={AppStyles.primaryBtnLargeText}>
							{lang[preferredLanguage]["Questionnaire →"]}
						</Text>
					</Pressable>
				</View>
			</ScrollView>
		);
	}

	if (!newPatient && details) {
		return (
			<ScrollView automaticallyAdjustKeyboardInsets={true}>
				<Navbar />
				<WorkerDetails />
				<PageHeading
					text={lang[preferredLanguage]["Patient Dashboard"]}
				/>
				<View style={styles.line}></View>
				<View>
					<OngoingMedicationOrders
						patientAbhaId={details["patient-abhaid"]}
						doctorName={
							details["ongoing-medication-orders"][
								"doctor-name"
							]
						}
						doctorComment={
							details["ongoing-medication-orders"][
								"doctor-comment"
							]
						}
						questionnaireType={
							details["ongoing-medication-orders"][
								"questionnaire-type"
							]
						}
					/>
					{/* <Graph /> */}
					<DiagnoseHistory />
				</View>
			</ScrollView>
		);
	}

	return null; // Default render before details or newPatient are available
};

const styles = StyleSheet.create({
	line: {
		backgroundColor: "#000",
		height: 2,
		width: "80%",
		alignSelf: "center",
		marginBottom: 10,
	},
	info: {
		fontSize: 22,
		fontWeight: "500",
	},
	btn: {
		alignSelf: "center",
		margin: 5,
	},
});

export default PatientDashboard;
