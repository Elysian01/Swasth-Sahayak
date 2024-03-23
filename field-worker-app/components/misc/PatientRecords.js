import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import FollowUpCard from "../cards/FollowUpCard";

const PatientRecords = () => {
	const [followUps, setFollowUps] = useState([]);

	useEffect(() => {
		// Fetch data from JSON file for follow-ups
		let data = require("../../database/DOWNLOADED_DATA.json");
		if (data && data["follow-up"]) {
			setFollowUps(data["follow-up"]);
		}
	});

	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.mainContainer}>
				{followUps.map((followUp, index) => (
					<FollowUpCard
						key={index}
						name={followUp["patient-name"]}
						address={followUp["patient-address"]}
						patientId={followUp["patient-id"]}
					/>
				))}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		// flex: 1,
	},
	mainContainer: {
		borderRadius: 10,
		backgroundColor: "#f5f5f5",
		marginHorizontal: "auto",
		width: "85%",
		padding: 15,
		alignSelf: "center",
		backgroundColor: "#f2f2f2",
	},
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
	visitedButton: {
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "white",
		backgroundColor: AppStyles.color.primary,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		paddingVertical: 13,
		paddingHorizontal: 35,
	},
	visitedButtonText: {
		color: "white",
		fontWeight: "600",
		fontSize: 14,
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
});

export default PatientRecords;
