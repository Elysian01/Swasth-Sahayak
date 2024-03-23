import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { lang } from "../../database/language";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FollowUpCard = (props) => {
	const navigation = useNavigation();

	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const handleViewRecords = () => {
		navigation.navigate("PatientToken");
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
				<TouchableOpacity style={styles.visitedButton}>
					<Text style={styles.visitedButtonText}>
						{lang[preferredlangauge]["Visited"]}
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.column3}>
				<TouchableOpacity
					style={styles.viewRecordsButton}
					onPress={handleViewRecords}
				>
					<Text style={styles.viewRecordsButtonText}>
						{lang[preferredlangauge]["View Patient Records"]}
					</Text>
				</TouchableOpacity>
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
	padding: {
		backgroundColor: "#fff",
		marginTop: 12,
	},
});
