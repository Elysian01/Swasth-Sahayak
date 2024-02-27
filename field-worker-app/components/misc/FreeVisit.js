import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const FreeVisit = () => {
	return (
		<View style={styles.container}>
			<View style={styles.mainContainer}></View>
			<Text style={styles.mainTitle}>
				Free Visits On
				<Text style={styles.sectorInfo}> Sector 12</Text>
			</Text>
			<TouchableOpacity style={styles.findPatientButton}>
				<Text style={styles.findPatientButtonText}>
					Find Patient
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		alignItems: "center",
		margin: 20,
	},
	mainContainer: {
		backgroundColor: "#000",
		width: "80%",
		height: 1,
	},
	mainTitle: {
		color: "#000",
		textAlign: "center",
		marginTop: 24,
		whiteSpace: "nowrap",
		fontSize: 24,
		fontWeight: "600",
		// fontFamily: "Playfair Display",
	},
	findPatientButton: {
		borderWidth: 0,
		borderRadius: 9,
		backgroundColor: AppStyles.color.primary,
		marginTop: 24,
		width: 369,
		maxWidth: "100%",
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
		textAlign: "center",
		paddingVertical: 22,
		paddingHorizontal: 60,
	},
	findPatientButtonText: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "700",
		// fontFamily: "Playfair Display",
	},
	sectorInfo: {
		color: "red",
		fontWeight: "bold",
	},
});

export default FreeVisit;
