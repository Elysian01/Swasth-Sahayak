import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../../database/language";

import FollowUpCard from "../cards/FollowUpCard";

const PatientRecords = () => {
	const navigation = useNavigation();

	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.mainContainer}>
				{/* <View style={styles.header}>
					<View style={styles.column}>
						<View style={styles.addressContainer}>
							<Text style={styles.name}>
								Aakash Bhardwaj
							</Text>
							<Text style={styles.address}>
								26/C, Hosur Rd, Electronics City Phase
								1, Electronic City, Bengaluru, Karnataka
								560100
							</Text>
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
								{
									lang[preferredlangauge][
										"View Patient Records"
									]
								}
							</Text>
						</TouchableOpacity>
					</View>
				</View> */}

				<FollowUpCard
					name="Aakash Bhardwaj"
					address="26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100"
				></FollowUpCard>

				<FollowUpCard
					name="Aakash Bhardwaj"
					address="26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100"
				></FollowUpCard>

				{/* <View style={styles.header}>
					<View style={styles.column}>
						<View style={styles.addressContainer}>
							<Text style={styles.name}>
								Abhishek Sharma
							</Text>
							<Text style={styles.address}>
								26/C, Hosur Rd, Electronics City Phase
								1, Electronic City, Bengaluru, Karnataka
								560100
							</Text>
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
								{
									lang[preferredlangauge][
										"View Patient Records"
									]
								}
							</Text>
						</TouchableOpacity>
					</View>
				</View> */}
			</View>
			<View style={styles.padding}></View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
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
	padding: {
		backgroundColor: "#fff",
		marginTop: 12,
	},
});

export default PatientRecords;
