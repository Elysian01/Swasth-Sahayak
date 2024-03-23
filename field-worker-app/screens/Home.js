import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import PatientRecords from "../components/misc/PatientRecords";
import FreeVisit from "../components/misc/FreeVisit";
import PageHeading from "../components/headers/PageHeading";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../database/language";

const Home = () => {
	const [preferredlangauge, setPreferredLanguage] = useState("English");
	const [dataDownloaded, setDataDownloaded] = useState(false);

	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const downloadData = async () => {
		console.log("Downloading data...");

		const uploadTemplate = {
			// list of all modified patient details
			"modified-patient-details": [],
			// docters slot booked
			doctors: [],
			// upload section
			"patient-registeration": [],
		};
		try {
			await AsyncStorage.setItem("uploadData", JSON.stringify(uploadTemplate));
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
					<FreeVisit />
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
