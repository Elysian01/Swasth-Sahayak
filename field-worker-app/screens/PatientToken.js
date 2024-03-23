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
	const patientId = props.route.params["patient-id"];

	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const [token, setToken] = useState("");
	const [abhaid, setAbhaID] = useState("");
	const tokenChangeHandler = (e) => {
		setToken(e.target.value);
	};

	function isPatientInDownloadedJson(patientToken) {
		let data = require("../database/DOWNLOADED_DATA.json");
		for (const patient of data["follow-up"]) {
			// Check if the patient's id and token match the input
			if (
				patient["patient-id"] === patientId &&
				patient["patient-token"] === patientToken
			) {
				setAbhaID(patient["patient-abhaid"]);
				return true; // Patient found
			}
		}
		return false; // Patient not found
	}

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
			navigation.navigate("PatientDashboard", {
				"patient-abhaid": abhaid,
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
