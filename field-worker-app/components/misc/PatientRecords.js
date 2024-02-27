import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

const PatientRecords = () => {
	const navigation = useNavigation(); // Get navigation object

	const handleViewRecords = () => {
		// Navigate to VerifyPatient screen
		navigation.navigate("PatientToken");
	};

	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.mainContainer}>
				<View style={styles.header}>
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
								Visited
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.column3}>
						<TouchableOpacity
							style={styles.viewRecordsButton}
							onPress={handleViewRecords}
						>
							<Text style={styles.viewRecordsButtonText}>
								View Patient Records
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.header}>
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
								Visited
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.column3}>
						<TouchableOpacity
							style={styles.viewRecordsButton}
							onPress={handleViewRecords}
						>
							<Text style={styles.viewRecordsButtonText}>
								View Patient Records
							</Text>
						</TouchableOpacity>
					</View>
				</View>
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
