import React from "react";
import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import PatientRecords from "../components/misc/PatientRecords";
import FreeVisit from "../components/misc/FreeVisit";
import PageHeading from "../components/headers/PageHeading";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { downloadAPI } from "../api/APIs";
import { lang } from "../database/language";
import dbFunctions from "../api/Queries";

const Home = () => {
	const [preferredlangauge, setPreferredLanguage] = useState("English");
	const [dataDownloaded, setDataDownloaded] = useState(false);
	// const [downloadedData, setDownloadedData] = useState("");
	const [assignedSector, setAssignedSector] = useState();

	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	async function initDB() {
		try {
			const r1 = await dbFunctions.createImagesTable();
			console.log(r1);
			const r2 = await dbFunctions.deleteAllImages();
			console.log(r2);
		} catch (error) {
			console.error(error);
		}
	}

	const downloadData = async () => {
		let downloadedData;
		await downloadAPI()
			.then(async (result) => {
				if (result) {
					console.log("Come: ", result);
					downloadedData = result;
					try {
						await AsyncStorage.setItem(
							"DownloadedData",
							JSON.stringify(downloadedData)
						);
						console.log(
							"Async Storage -> Download data storage Success"
						);
						await AsyncStorage.setItem(
							"DataChangeStatus",
							"false"
						);
						setAssignedSector(
							result["field_worker_details"][
								"field_worker_assigned_sector"
							]
						);

						initDB();
					} catch (error) {
						console.log(
							"Error setting up download data, Async Storage " +
								error
						);
					}
				} else {
					console.log("Error in fetching the data");
					console.log(result);
					Alert.alert("Error", result);
				}
			})
			.catch((error) => {
				console.log(error);
				Alert.alert("Unable to Download Data: ", error);
			});


		let data = await AsyncStorage.getItem("DownloadedData");
		const fwid = await AsyncStorage.getItem("FieldWorkerID");

		data = JSON.parse(data);

		const uploadTemplate = {
			fieldworker_id: fwid,
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

		// console.log("U: ", uploadTemplate);

		try {
			await AsyncStorage.setItem(
				"uploadData",
				JSON.stringify(uploadTemplate)
			);
			setDataDownloaded(true);
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
