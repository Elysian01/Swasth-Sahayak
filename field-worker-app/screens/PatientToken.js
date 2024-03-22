import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import InputField from "../components/inputs/InputField";
import Button from "../components/misc/Button";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../database/language";

const getLanguage = async () => {
	return await AsyncStorage.getItem("Language");
}


const PatientToken = () => {
	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});
	const navigation = useNavigation();

	const [token, setToken] = useState("");
	const tokenChangeHandler = (e) => {
		setToken(e.target.value);
	};
	return (
		<View>
			<Navbar />
			<WorkerDetails />

			<Text style={styles.pageHeading}>{lang[preferredlangauge]["Patient Token"]}</Text>

			<View style={styles.inputs}>
				<InputField
					id="token"
					type="patientDetail"
					placeholder={lang[preferredlangauge]["Enter Patient Token"]}
					onChange={tokenChangeHandler}
					value={token}
					lightBackground={true}
				/>
				<View style={styles.btn}>
					<Button
						type="primary"
						navigateTo="PatientDashboard"
						text={lang[preferredlangauge]["Submit"]}
					/>
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
