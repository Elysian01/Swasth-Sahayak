import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import PatientRecords from "../components/misc/PatientRecords";
import FreeVisit from "../components/misc/FreeVisit";
import PageHeading from "../components/headers/PageHeading";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

import { downloadAPI } from "../api/APIs";
import { lang } from "../database/language";

const Home = () => {
	const [preferredlangauge, setPreferredLanguage] = useState("English");
	const [dataDownloaded, setDataDownloaded] = useState(false);
	const [assignedSector, setAssignedSector] = useState();

	saveFile = async (saveData) => {
		let fileUri = FileSystem.documentDirectory + "test.json";
		await FileSystem.writeAsStringAsync(
			fileUri,
			JSON.stringify(saveData),
			{
				encoding: FileSystem.EncodingType.UTF8,
			}
		);

		let data = await FileSystem.readAsStringAsync(fileUri);
		console.log("File data: ", data);
	};

	// useEffect(() => {
	// 	const saveData = {
	// 		test: "working",
	// 	};
	// 	saveFile(saveData);
	// }, []);

	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const downloadData = async () => {
		// await downloadAPI()
		// 	.then((result) => {
		// 		if (result.status === 200) {
		// 			console.log(result.data);
		// 		} else if (result.status === 401) {
		// 			console.log(result.status);
		// 			Alert.alert("Error", result.data, []);
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 		Alert.alert("Unable to Download Data: ", error);
		// 	});

		console.log("Downloading data...");

		let data = require("../database/DOWNLOADED_DATA.json");
		setAssignedSector(
			data["field_worker_details"]["field_worker_assigned_sector"]
		);

		const uploadTemplate = {
			// list of all follow_ups
			follow_up: data["follow_up"],
			// list of all questionnaire responses
			questionnaire_response: [],
			// list of all field workers comments
			fieldworker_comments: [],
			// list of all artifacts
			artifacts: [],
			// docters slot booked
			doctors: data["doctors"],
			// list of doctor chosen by patient
			chosen_doctor: [],
			// upload section
			patient_registeration: [],
		};
		console.log(uploadTemplate);
		try {
			await AsyncStorage.setItem(
				"uploadData",
				JSON.stringify(uploadTemplate)
			);
			setDataDownloaded(true);
			console.log("True");
		} catch (error) {
			console.log(
				"Error setting upload data, please re-download " + error
			);
		}
	};

	return (
		<View>
			<Navbar />
			<WorkerDetails />
			{!dataDownloaded && (
				<View>
					<Text style={styles.downloadText}>
						{lang[preferredlangauge]["Sector Data"]}
						<Text style={styles.downloadStatus}>
							{" "}
							{lang[preferredlangauge]["Not Downloaded"]}
						</Text>
					</Text>
					<View style={styles.btn}>
						<Pressable
							onPress={downloadData}
							style={styles.primary}
						>
							<Text style={styles.ButtonText}>
								{
									lang[preferredlangauge][
										"Download Sector Data"
									]
								}
							</Text>
						</Pressable>
					</View>
				</View>
			)}

			{dataDownloaded && (
				<View>
					<PageHeading
						text={
							lang[preferredlangauge]["Follow-Up Schedule"]
						}
					/>
					<PatientRecords />
					<FreeVisit assignedSector={assignedSector} />
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	downloadText: {
		fontSize: 22,
		fontWeight: "500",
		color: "black",
		textAlign: "center",
	},
	downloadStatus: {
		color: "red",
	},
	btn: {
		alignItems: "center",
	},
	primary: {
		backgroundColor: AppStyles.color.primary,
		maxWidth: 300,
		borderRadius: 7,
		paddingVertical: 15,
		paddingHorizontal: 25,
		marginVertical: 20,
		marginHorizontal: 20,
	},
	ButtonText: {
		color: "white",
		textAlign: "center",
		fontSize: 20,
		fontWeight: "600",
	},
	container: {
		flex: 1,
	},
	header: {
		padding: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
});

export default Home;
