import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { lang } from "../../database/language";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppStyles from "../../AppStyles";

const FollowUpCard = (props) => {
	const navigation = useNavigation();

	const visitedStatus = props.visitedStatus;
	const followUpID = props.followUpID;

	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const handleViewRecords = () => {
		navigation.navigate("PatientToken", {
			"patient_abhaid": props.patientAbhaId,
			"follow_up_id": followUpID,
		});
	};
	return (
		<View style={styles.header}>
			<View style={styles.column}>
				<View style={styles.addressContainer}>
					<Text style={styles.name}>{props.name}</Text>
					<Text style={styles.address}>{props.address}</Text>
				</View>
			</View>
			<View style={styles.column2}>
				{visitedStatus && (
					<View style={styles.visitedSection}>
						<Text style={styles.visitedSectionText}>
							{lang[preferredlangauge]["Visited"]}
						</Text>
					</View>
				)}
				{!visitedStatus && (
					<View style={styles.notVisitedSection}>
						<Text style={styles.notVisitedSectionText}>
							{lang[preferredlangauge]["Not Visited"]}
						</Text>
					</View>
				)}
			</View>
			<View style={styles.column3}>
				<Pressable
					style={styles.viewRecordsButton}
					onPress={handleViewRecords}
				>
					<Image
						source={require("../../assets/icons/view-records.png")}
						style={styles.image}
					/>
					<Text style={styles.viewRecordsButtonText}>
						{lang[preferredlangauge]["View Patient Records"]}
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default FollowUpCard;

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		marginVertical: 10,
		alignItems: "center",
	},
	column: {
		flex: 1,
	},
	addressContainer: {
		flexDirection: "column",
		color: "#000",
	},
	name: {
		fontWeight: "bold",
		fontSize: 20,
		lineHeight: 24,
	},
	address: {
		marginTop: 11,
		fontSize: 16,
		lineHeight: 24,
	},
	column2: {
		width: "21%",
		marginLeft: 20,
	},
	visitedSection: {
		borderRadius: 20,
		borderWidth: 2,
		borderColor: AppStyles.color.primary,
		color: AppStyles.color.primary,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	notVisitedSection: {
		borderRadius: 20,
		borderWidth: 2,
		borderColor: AppStyles.color.red,
		color: AppStyles.color.red,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	notVisitedSectionText: {
		color: AppStyles.color.red,
		fontWeight: "600",
		fontSize: 16,
	},
	visitedSectionText: {
		color: AppStyles.color.primary,
		fontWeight: "600",
		fontSize: 16,
	},
	column3: {
		width: "17%",
		marginLeft: 20,
	},
	viewRecordsButton: {
		alignItems: "center",
	},
	viewRecordsButtonText: {
		color: "#000",
		fontWeight: "600",
		fontSize: 12,
		textDecorationLine: "underline",
		textShadowRadius: 4,
		textAlign: "center",
	},
	image: {
		width: 40,
		height: 40,
		padding: 5,
		marginBottom: 5,
	},
	padding: {
		backgroundColor: "#fff",
		marginTop: 12,
	},
});
