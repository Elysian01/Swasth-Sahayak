import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import "../../AppStyles";
import AppStyles from "../../AppStyles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../../database/language";

const WorkerDetails = () => {
	const [preferredlangauge, setPreferredLanguage] = useState("English");
	const [fieldWorkerId, setFieldWorkerId] = useState("");
	const [fieldWorkerName, setFieldWorkerName] = useState("");

	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});
	AsyncStorage.getItem("FieldWorkerID").then((id) => {
		setFieldWorkerId(id);
	});
	AsyncStorage.getItem("FieldWorkerName").then((name) => {
		setFieldWorkerName(name);
	});

	return (
		<View style={styles.container}>
			<Text style={styles.quote}>
				{
					lang[preferredlangauge][
						"A doctor is a person who heals, while a nurse is a person who cares"
					]
				}
			</Text>
			<View style={styles.workerDetails}>
				<Text style={styles.details}>
					{lang[preferredlangauge]["Hello"]}, {fieldWorkerName}
				</Text>
				<Text style={styles.details}>ID: {fieldWorkerId}</Text>
			</View>
		</View>
	);
};

export default WorkerDetails;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 50,
		marginVertical: 15,
	},
	quote: {
		color: AppStyles.color.primary,
		fontSize: 22,
		textAlign: "center",
		fontWeight: "bold",
		marginVertical: 20,
	},
	workerDetails: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	details: {
		fontSize: 18,
		marginVertical: 7,
	},
});
