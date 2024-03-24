import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import PageHeading from "../components/headers/PageHeading";

import AppStyles from "../AppStyles";

const Prescription = (props) => {
	const navigation = useNavigation();

	const doctorName = "Abhishek Gupta";
	const diagnoseDate = "12-05-2013";
	const fieldWorkerName = "Aakash Bhardaj";
	const prescriptionDate = "13-05-2013";
	const patientName = "Jass Sadana";
	const patientAbhaId = "1234567812345678";
	const prescription =
		"lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it";

	function goBackToDashboard() {
		navigation.navigate("PatientDashboard", {
			"patient-abhaid": patientAbhaId,
			"new-patient": false,
		});
	}
	return (
		<ScrollView>
			<Navbar />
			<WorkerDetails />
			<PageHeading text="Prescription" />
			{/* <PageHeading text={lang[preferredlangauge]["Prescription"]} /> */}
			<View style={AppStyles.line}></View>
			<View style={styles.info}>
				<View style={styles.column}>
					<Text style={styles.text}>
						Field Worker: {fieldWorkerName}
					</Text>
					<Text style={styles.text}>Doctor: {doctorName}</Text>
					<Text style={styles.text}>Patient: {patientName}</Text>
				</View>
				<View style={styles.column}>
					<Text style={styles.text}>
						Diagnose Date: {diagnoseDate}
					</Text>
					<Text style={styles.text}>
						Prescription Date: {prescriptionDate}
					</Text>
					<Text style={styles.text}>
						Patient ABHA-ID: {patientAbhaId}
					</Text>
				</View>
			</View>
			<View style={styles.perscriptionMain}>
				<Text style={AppStyles.subHeading}>Prescription</Text>
				<View style={styles.perscription}>
					<Text style={styles.text}>{prescription}</Text>
				</View>
			</View>

			<View style={styles.btns}>
				<Pressable
					onPress={goBackToDashboard}
					style={AppStyles.primaryBtn}
				>
					{/* <Text style={AppStyles.primaryBtnText}>
						{lang[preferredlangauge]["Back to Patient Dashboard"]}
					</Text> */}
					<Text style={AppStyles.primaryBtnText}>
						Back to Patient Dashboard
					</Text>
				</Pressable>
				<Pressable style={AppStyles.primaryBtn}>
					{/* <Text style={AppStyles.primaryBtnText}>
						{lang[preferredlangauge]["Print via Bluetooth"]}
					</Text> */}
					<Text style={AppStyles.primaryBtnText}>
						Print via Bluetooth
					</Text>
				</Pressable>
			</View>
		</ScrollView>
	);
};

export default Prescription;

const styles = StyleSheet.create({
	info: {
		display: "flex",
		flexDirection: "row",
		width: "80%",
		alignSelf: "center",
		justifyContent: "space-between",
	},
	column: {
		display: "flex",
		flexDirection: "column",
	},
	text: {
		fontSize: 20,
		fontWeight: "600",
		// marginHorizontal: 25,
		marginVertical: 10,
		justifyContent: "flex-start",
		textAlignVertical: "center",
	},
	perscriptionMain: {
		width: "80%",
		alignSelf: "center",
		marginTop: 20,
	},
	perscription: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 10,
		alignSelf: "center",
		marginBottom: 50,
	},
	btns: {
		display: "flex",
		width: "80%",
		flexDirection: "row",
		alignSelf: "center",
		justifyContent: "space-around",
	},
});
