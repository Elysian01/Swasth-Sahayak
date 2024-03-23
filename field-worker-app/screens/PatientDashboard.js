import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Pressable,
	StyleSheet,
	Image,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CurrentDiagnose from "../components/misc/CurrentDiagnose";
import DiagnoseHistory from "../components/misc/DiagnoseHistory";
import Graph from "../components/misc/Graph";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import PageHeading from "../components/headers/PageHeading";
import AppStyles from "../AppStyles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../database/language";

const PatientDashboard = (props) => {
	const navigation = useNavigation();
	const patientAbhaId = props.route.params["patient-abhaid"];
	const newPatient = props.route.params["new-patient"];

	console.log(patientAbhaId);

	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const [cuurentOrders, setCuurentOrders] = useState("");

	function goToDefaultQuestionnaire() {
		navigation.navigate("Questionnaire", {
			"questionnaire-type": "default",
			"patient-abhaid": patientAbhaId,
		});
	}

	return (
		<ScrollView>
			<Navbar />
			<WorkerDetails />
			<PageHeading
				text={lang[preferredlangauge]["Patient Dashboard"]}
			/>
			<View style={styles.line}></View>
			{newPatient && (
				<View style={styles.btn}>
					<Text style={styles.info}>
						No Data, Please go ask questionnaire
					</Text>
					<Pressable
						onPress={goToDefaultQuestionnaire}
						style={AppStyles.primaryBtn}
					>
						<Text style={AppStyles.primaryBtnLargeText}>
							{lang[preferredlangauge]["Questionnaire →"]}
						</Text>
					</Pressable>
				</View>
			)}
			{!newPatient && (
				<View>
					<CurrentDiagnose />
					<Graph />
					<DiagnoseHistory />
				</View>
			)}
		</ScrollView>
	);
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
		margin: 5,
	},
});
export default PatientDashboard;
