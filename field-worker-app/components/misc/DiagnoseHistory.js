import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../../database/language";
import AppStyles from "../../AppStyles";

const DiagnoseHistory = ({
	prescriptions,
	patientName,
	patientAbhaId,
	fieldWorkerId,
}) => {
	const navigation = useNavigation();

	// const prescriptions = props.prescriptions;
	// const patientName = props.patientName;
	// const patientAbhaId = props.patientAbhaId;
	// const fieldWorkerId = props.fieldWorkerId;

	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const [fieldWorkerName, setFieldWorkerName] = useState("");
	AsyncStorage.getItem("FieldWorkerName").then((name) => {
		setFieldWorkerName(name);
	});

	function viewPrescription(prescriptionData) {
		navigation.navigate("Prescription", {
			disease: getDiseaseName(prescriptionData["disease_name"]),
			prescriptionDate: prescriptionData["date"],
			doctorName: prescriptionData["doctor_name"],
			prescription: prescriptionData["prescription"],
			fieldWorkerName: fieldWorkerName,
			patientName: patientName,
			patientAbhaId: patientAbhaId,
			fieldWorkerId: fieldWorkerId,
		});
	}

	function getDiseaseName(icd10Code) {
		const icd10Codes = require("../../database/ICD10_CODES.json");
		const entry = icd10Codes.find((entry) => entry.code === icd10Code);
		return entry ? entry["disease_name"] : null;
	}

	return (
		<View style={styles.container}>
			<Text style={AppStyles.subHeading}>
				{lang[preferredlangauge]["Diagnose History"]}
			</Text>
			<View style={styles.table}>
				<View style={[styles.tableRow, styles.headerRow]}>
					<Text style={styles.tableHeader}>
						{lang[preferredlangauge]["Date"]}
					</Text>
					<Text style={styles.tableHeader}>
						{lang[preferredlangauge]["Disease"]}
					</Text>
					<Text style={styles.tableHeader}>
						{lang[preferredlangauge]["Prescription"]}
					</Text>
				</View>

				{prescriptions.map((prescription, index) => (
					<View key={index} style={styles.tableRow}>
						<Text style={styles.tableData}>
							{prescription.date}
						</Text>
						<Text style={styles.tableData}>
							{prescription["disease_name"]}
						</Text>
						<Pressable
							onPress={() =>
								viewPrescription(prescription)
							}
							style={styles.eyeContainer}
						>
							<Image
								source={require("../../assets/icons/eye.png")}
								style={styles.img}
							/>
						</Pressable>
					</View>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "80%",
		alignSelf: "center",
		marginBottom: 50,
	},
	table: {
		width: "100%",
		padding: 20,
	},
	tableRow: {
		flexDirection: "row",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		alignItems: "center",
	},
	headerRow: {
		backgroundColor: AppStyles.color.primaryLight,
	},
	tableHeader: {
		flex: 1,
		padding: 15,
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
	},

	img: {
		width: 35,
		height: 20,
	},
	tableData: {
		flex: 1,
		padding: 12,
		textAlign: "center",
		fontSize: 18,
		fontWeight: "500",
	},
	eyeContainer: {
		flex: 1,
		alignItems: "center",
	},
});

export default DiagnoseHistory;
