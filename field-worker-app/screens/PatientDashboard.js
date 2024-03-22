import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
	ScrollView,
} from "react-native";
import CurrentDiagnose from "../components/misc/CurrentDiagnose";
import DiagnoseHistory from "../components/misc/DiagnoseHistory";
import Graph from "../components/misc/Graph";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import PageHeading from "../components/headers/PageHeading";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../database/language";

const getLanguage = async () => {
	return await AsyncStorage.getItem("Language");
}

const PatientDashboard = () => {

	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const [text, setText] = useState(""); // State to hold the text input value

	return (
		<ScrollView>
			<Navbar />
			<WorkerDetails />
			<PageHeading text={lang[preferredlangauge]["Patient Dashboard"]} />
			<CurrentDiagnose />
			<Graph />
			<DiagnoseHistory />
		</ScrollView>
	);
};

export default PatientDashboard;
