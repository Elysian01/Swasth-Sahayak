import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import PatientRecords from "../components/misc/PatientRecords";
import FreeVisit from "../components/misc/FreeVisit";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import PageHeading from "../components/headers/PageHeading";


import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../database/language";

const getLanguage = async () => {
	return await AsyncStorage.getItem("Language");
}


const Followup = () => {
	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});
	return (
		<View style={styles.container}>
			<Navbar />
			<WorkerDetails />
			<PageHeading text={lang[preferredlangauge]["Follow-Up Schedule"]} />
			<PatientRecords />
			<FreeVisit />
		</View>
	);
};

const styles = StyleSheet.create({
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

export default Followup;
