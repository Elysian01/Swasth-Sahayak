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
	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const navigation = useNavigation();

	const [abhaId, setAbhaId] = useState("");
	const abhaIdChangeHandler = (e) => {
		setAbhaId(e.target.value);
	};

	function isPatientInDownloadedJson() {
		let data = require("../database/DOWNLOADED_DATA.json");
		for (const patient of data["patient-details"]) {
			// Check if the patient's id and token match the input
			if (patient["patient-abhaid"] === abhaId) {
				return true; // Patient found
			}
		}
		return false; // Patient not found
	}

	function handleFindPatient() {
		const foundPatient = isPatientInDownloadedJson();
		if (!foundPatient) {
			Alert.alert(
				"Token Incorrect",
				"Please Enter correct token for this patient."
			);
			setAbhaId("");
			return;
		} else {
			navigation.navigate("PatientDashboard", {
				"patient-abhaid": abhaId,
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
					type="patientDetail"
					placeholder={lang[preferredlangauge]["Enter ABHA ID"]}
					onChange={abhaIdChangeHandler}
					value={abhaId}
					lightBackground={true}
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

					{/* <Button
						type="primary"
						navigateTo="Home"
						text={}
					/>
					<Button
						type="primary"
						navigateTo="RegisterPatient"
						text={}
					/> */}
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
