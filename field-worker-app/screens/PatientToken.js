import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import InputField from "../components/inputs/InputField";
import AppStyles from "../AppStyles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../database/language";

const PatientToken = (props) => {
	const navigation = useNavigation();
	patientAbhaId = props.route.params["patient-abhaid"];
	const followUpID = props.route.params["follow-up-id"];

	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const [token, setToken] = useState("");
	const tokenChangeHandler = (e) => {
		setToken(e);
	};

	function isPatientInDownloadedJson(patientToken) {
		let data = require("../database/DOWNLOADED_DATA.json");
		for (const patient of data["follow-up"]) {
			// Check if the patient's id and token match the input
			if (
				patient["patient-abhaid"] === patientAbhaId &&
				patient["patient-token"] === patientToken
			) {
				patientAbhaId = patient["patient-abhaid"];
				return true; // Patient found
			}
		}
		return false; // Patient not found
	}

	const updateFollowUpVisitedStatusToTrue = async (patientAbhaId) => {
		try {
			let uploadData = await AsyncStorage.getItem("uploadData");
			if (uploadData) {
				uploadData = JSON.parse(uploadData);
				const updatedFollowUp = uploadData["follow-up"].map(
					(followUp) => {
						if (
							followUp["patient-abhaid"] === patientAbhaId
						) {
							return {
								...followUp,
								"visited-status": true,
							};
						}
						return followUp;
					}
				);
				uploadData["follow-up"] = updatedFollowUp;
				console.log("Updated: ", uploadData);
				await AsyncStorage.setItem(
					"uploadData",
					JSON.stringify(uploadData)
				);
			}
		} catch (error) {
			console.error(
				"Error updating follow-up visited status: ",
				error
			);
		}
	};

	function checkToken() {
		if (!token) {
			Alert.alert("Incomplete Form", "Please fill in all fields.");
			return;
		}
		const response = isPatientInDownloadedJson(token);
		if (!response) {
			Alert.alert(
				"Token Incorrect",
				"Please Enter correct token for this patient."
			);
			setToken("");
			return;
		} else {
			updateFollowUpVisitedStatusToTrue(patientAbhaId);
			navigation.navigate("PatientDashboard", {
				"patient-abhaid": patientAbhaId,
				"new-patient": false,
			});
		}
	}

	return (
		<View>
			<Navbar />
			<WorkerDetails />

			<Text style={styles.pageHeading}>
				{lang[preferredlangauge]["Patient Token"]}
			</Text>

			<View style={styles.inputs}>
				<InputField
					id="token"
					type="patientDetail"
					placeholder={
						lang[preferredlangauge]["Enter Patient Token"]
					}
					onChange={tokenChangeHandler}
					value={token}
					lightBackground={true}
				/>

				<View style={styles.btn}>
					<Pressable
						onPress={checkToken}
						style={AppStyles.primaryBtn}
					>
						<Text style={AppStyles.primaryBtnText}>
							{lang[preferredlangauge]["Submit"]}
						</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	pageHeading: {
		textAlign: "center",
		fontSize: 30,
		fontWeight: "600",
		marginBottom: 25,
	},
	inputs: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	btn: {
		marginVertical: 18,
	},
});

export default PatientToken;
