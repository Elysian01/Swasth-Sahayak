import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../../database/language";
import AppStyles from "../../AppStyles";
import { useNavigation } from "@react-navigation/native";

const OngoingMedicationOrders = (props) => {
	const navigation = useNavigation();

	const questionnaireType = props.questionnaireType;
	const patientAbhaId = props.patientAbhaId;
	const doctorName = props.doctorName;
	const ongoingMedicationOrders = props.doctorComment;
	const disease = props.disease;

	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	function askQuestionnaire() {
		navigation.navigate("Questionnaire", {
			"questionnaire_type": questionnaireType,
			"patient_abhaid": patientAbhaId,
		});
	}

	return (
		<View style={styles.container}>
			{/* <Text style={AppStyles.subHeading}>
				{lang[preferredlangauge]["Ongoing medication orders"]}
			</Text> */}
			<View style={styles.doctor}>
				<Image
					source={require("../../assets/icons/DoctorIcon.png")}
					style={styles.img}
				/>
				<View style={styles.info}>
					<View style={styles.doctorInfo}>
						<Text style={styles.doctorName}>
							Dr. {doctorName}
						</Text>
						<Text style={styles.doctorInfoStatus}>
							Added new Follow-up Instructions
						</Text>
						{/* <Text style={AppStyles.subHeading}>
							{lang[preferredlangauge]["Added new Follow-up Instructions"]}
						</Text> */}
					</View>
				</View>
			</View>
			<View style={styles.diseaseContainer}>
				<Text style={styles.disease}>{disease}</Text>
			</View>

			<View style={styles.perscription}>
				<Text style={styles.text}>{ongoingMedicationOrders}</Text>
			</View>

			<View style={AppStyles.btn}>
				<Pressable
					onPress={askQuestionnaire}
					style={AppStyles.primaryBtn}
				>
					{/* <Text style={AppStyles.primaryBtnText}>
						{lang[preferredlangauge]["Ask Questionnaire"]} 
					</Text> */}
					<Text style={AppStyles.primaryBtnText}>
						Ask Questionnaire
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "80%",
		alignSelf: "center",
	},
	doctor: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 20,
		gap: 20,
	},
	info: {
		display: "flex",
		flexDirection: "column",
		gap: 20,
	},
	diseaseContainer: {
		marginHorizontal: 20,
		marginBottom: 10,
	},
	disease: {
		color: "red",
		fontSize: 18,
		fontWeight: "bold",
	},
	doctorInfo: {
		flexDirection: "column",
		gap: 5,
	},
	doctorName: {
		fontSize: 24,
		fontWeight: "bold",
	},
	doctorInfoStatus: {
		fontSize: 16,
		fontWeight: "400",
	},
	img: {
		width: 50,
		height: 50,
	},
	text: {
		fontSize: 20,
		fontWeight: "600",
		marginVertical: 10,
		justifyContent: "flex-start",
		verticalAlign: "middle",
	},
	perscription: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 10,
		alignSelf: "center",
		marginBottom: 20,
	},
});

export default OngoingMedicationOrders;
