import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import InputField from "../components/inputs/InputField";
import PageHeading from "../components/headers/PageHeading";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../database/language";
import AppStyles from "../AppStyles";

const FindPatient = () => {
	const navigation = useNavigation();

	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const [abhaId, setAbhaId] = useState("");
	const abhaIdChangeHandler = (e) => {
		setAbhaId(e);
	};

	function isPatientInDownloadedJson() {
		let data = require("../database/DOWNLOADED_DATA.json");
		for (const patient of data["patient_details"]) {
			// Check if the patient's id and token match the input
			if (patient["patient_abhaid"] === abhaId) {
				return true; // Patient found
			}
		}
		return false; // Patient not found
	}

	function handleFindPatient() {
		const foundPatient = isPatientInDownloadedJson();
		if (!foundPatient) {
			Alert.alert(
				"Abha-ID Not Found",
				"Abha-ID Not Found, please enter correct Abha-ID or try registering the patient"
			);
			setAbhaId("");
			return;
		} else {
			setAbhaId("");
			navigation.navigate("PatientDashboard", {
				"patient_abhaid": abhaId,
				"new_patient": false,
			});
		}
	}

	function handleRegisterPatient() {
		navigation.navigate("RegisterPatient");
	}

	return (
		<View>
			<Navbar />
			<WorkerDetails />
			<PageHeading text={lang[preferredlangauge]["Find Patient"]} />

			<View style={styles.inputs}>
				<InputField
					id="abhaId"
					type="number"
					placeholder={lang[preferredlangauge]["Enter ABHA ID"]}
					onChange={abhaIdChangeHandler}
					value={abhaId}
					lightBackground={true}
					icon="PatientDetail"
				/>
				<View style={styles.btn}>
					<Pressable
						onPress={handleFindPatient}
						style={AppStyles.primaryBtn}
					>
						<Text style={AppStyles.primaryBtnText}>
							{lang[preferredlangauge]["Find Patient"]}
						</Text>
					</Pressable>
					<Pressable
						onPress={handleRegisterPatient}
						style={AppStyles.primaryBtn}
					>
						<Text style={AppStyles.primaryBtnText}>
							{lang[preferredlangauge]["Register Patient"]}
						</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default FindPatient;

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
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "60%",
		marginVertical: 18,
	},
});
