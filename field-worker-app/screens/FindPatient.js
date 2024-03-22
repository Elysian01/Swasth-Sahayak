import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import InputField from "../components/inputs/InputField";
import Button from "../components/misc/Button";
import PageHeading from "../components/headers/PageHeading";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../database/language";

const getLanguage = async () => {
	return await AsyncStorage.getItem("Language");
}

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
	return (
		<View>
			<Navbar />
			<WorkerDetails />

			{/* <Text style={styles.pageHeading}>Find Patient</Text> */}
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
					<Button
						type="primary"
						navigateTo="Home"
						text={lang[preferredlangauge]["Find Patient"]}
					/>
					<Button
						type="primary"
						navigateTo="RegisterPatient"
						text={lang[preferredlangauge]["Register Patient"]}
					/>
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
