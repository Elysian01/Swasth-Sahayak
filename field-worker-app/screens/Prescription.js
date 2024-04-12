import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import PageHeading from "../components/headers/PageHeading";

import AppStyles from "../AppStyles";

const Prescription = (props) => {
	const navigation = useNavigation();

	const [dataSetted, setDataSetted] = useState(false);

	const [doctorName, setDoctorName] = useState("");
	const [disease, setDisease] = useState("");
	const [fieldWorkerName, setFieldWorkerName] = useState("");
	const [prescriptionDate, setPrescriptionDate] = useState("");
	const [patientName, setPatientName] = useState("");
	const [patientAbhaId, setPatientAbhaId] = useState("");
	const [prescription, setPrescription] = useState("");
	const [fieldWorkerId, setFieldWorkerId] = useState("");

	useEffect(() => {
		if (props.route.params) {
			const {
				doctorName,
				disease,
				fieldWorkerName,
				prescriptionDate,
				patientName,
				patientAbhaId,
				prescription,
				fieldWorkerId,
			} = props.route.params;

			setDoctorName(doctorName);
			setDisease(disease);
			setFieldWorkerName(fieldWorkerName);
			setPrescriptionDate(prescriptionDate);
			setPatientName(patientName);
			setPatientAbhaId(patientAbhaId);
			setPrescription(prescription);
			setFieldWorkerId(fieldWorkerId);
			setDataSetted(true);
		}
	}, [props.route.params]);

	function goBackToDashboard() {
		navigation.navigate("PatientDashboard", {
			"patient_abhaid": patientAbhaId,
			"new_patient": false,
		});
	}
	return (
		<ScrollView>
			<Navbar />
			<WorkerDetails />
			<PageHeading text="Prescription" />
			{/* <PageHeading text={lang[preferredlangauge]["Prescription"]} /> */}
			<View style={AppStyles.line}></View>
			{dataSetted && (
				<View>
					<View style={styles.info}>
						<View style={styles.column}>
							<Text style={styles.text}>
								Field Worker: {fieldWorkerName}
							</Text>
							<Text style={styles.text}>
								Doctor: {doctorName}
							</Text>
							<Text style={styles.text}>
								Patient: {patientName}
							</Text>
						</View>
						<View style={styles.column}>
							<Text style={styles.text}>
								Field Worker ID: {fieldWorkerId}
							</Text>
							<Text style={styles.text}>
								Prescription Date: {prescriptionDate}
							</Text>
							<Text style={styles.text}>
								Patient ABHA-ID: {patientAbhaId}
							</Text>
						</View>
					</View>
					<View style={styles.diseaseContainer}>
						<Text style={styles.diseaseText}>Disease:</Text>
						<Text style={styles.disease}> {disease}</Text>
					</View>
					<View style={styles.perscriptionMain}>
						<Text style={AppStyles.subHeading}>
							Prescription
						</Text>
						<View style={styles.perscription}>
							<Text style={styles.text}>
								{prescription}
							</Text>
						</View>
					</View>

					<View style={styles.btns}>
						<Pressable
							onPress={() => goBackToDashboard()}
							style={AppStyles.primaryBtn}
						>
							{/* <Text style={AppStyles.primaryBtnText}>
						{lang[preferredlangauge]["Back to Patient Dashboard"]}
					</Text> */}
							<Text style={AppStyles.primaryBtnText}>
								Back to Patient Dashboard
							</Text>
						</Pressable>
						<Pressable
							onPress={() => goBackToDashboard()}
							style={AppStyles.primaryBtn}
						>
							{/* <Text style={AppStyles.primaryBtnText}>
						{lang[preferredlangauge]["Print via Bluetooth"]}
					</Text> */}
							<Text style={AppStyles.primaryBtnText}>
								Print via Bluetooth
							</Text>
						</Pressable>
					</View>
				</View>
			)}
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
		fontSize: 18,
		fontWeight: "500",
		// marginHorizontal: 25,
		marginVertical: 10,
		justifyContent: "flex-start",
		textAlignVertical: "center",
	},
	diseaseContainer: {
		width: "80%",
		display: "flex",
		flexDirection: "row",
		alignSelf: "center",
		// justifyContent: "space",
		marginHorizontal: 10,
		marginTop: 15,
	},
	diseaseText: {
		color: "black",
		fontSize: 18,
		fontWeight: "bold",
	},
	disease: {
		color: "red",
		fontSize: 18,
		fontWeight: "bold",
	},
	perscriptionMain: {
		width: "80%",
		alignSelf: "center",
		marginTop: 15,
	},
	perscription: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 10,
		alignSelf: "center",
		marginBottom: 50,
		marginRight: 10,
	},
	btns: {
		display: "flex",
		width: "80%",
		flexDirection: "row",
		alignSelf: "center",
		justifyContent: "space-around",
	},
});
