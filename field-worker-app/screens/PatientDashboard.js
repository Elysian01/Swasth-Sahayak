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
			patient_abhaid: patientAbhaIdProp,
			new_patient: newPatientProp,
		} = props.route.params;
		setPatientAbhaId(patientAbhaIdProp);
		setNewPatient(newPatientProp);
	}, [props.route.params]);

	const setData = async () => {
		// Fetch patient details when patientAbhaId changes
		if (patientAbhaId && !newPatient) {
			// const data = require("../database/DOWNLOADED_DATA.json");

			let data = await AsyncStorage.getItem("DownloadedData");
			if (data) {
				data = JSON.parse(data);

				const foundDetail = data["patient_details"].find(
					(detail) => detail["patient_abhaid"] === patientAbhaId
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
		}
	};

	useEffect(() => {
		setData();
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
		console.log("Going to Default Questionnaire ... ");
		navigation.navigate("Questionnaire", {
			questionnaire_type: "general",
			patient_abhaid: patientAbhaId,
		});
	}

	function getDiseaseName(icd10Code) {
		const icd10Codes = require("../database/ICD10_CODES.json");
		const entry = icd10Codes.find((entry) => entry.code === icd10Code);
		return entry ? entry["disease_name"] : null;
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
					{details["ongoing_medication_orders"] && (
						<OngoingMedicationOrders
							patientAbhaId={details["patient_abhaid"]}
							doctorName={
								details["ongoing_medication_orders"][
									"doctor_name"
								]
							}
							doctorComment={
								details["ongoing_medication_orders"][
									"doctor_comment"
								]
							}
							questionnaireType={
								details["ongoing_medication_orders"][
									"questionnaire_type"
								]
							}
							disease={getDiseaseName(
								details["ongoing_medication_orders"][
									"ICD10_code"
								]
							)}
						/>
					)}
					{/* <Graph /> */}
					<DiagnoseHistory
						prescriptions={details["recent_3_prescriptions"]}
						patientName={details["patient_name"]}
						patientAbhaId={details["patient_abhaid"]}
						fieldWorkerId={details["fieldworker_id"]}
					/>
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
		// margin: 5,
	},
});

export default PatientDashboard;
