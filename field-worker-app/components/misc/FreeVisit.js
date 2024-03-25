import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../../database/language";

const getLanguage = async () => {
	return await AsyncStorage.getItem("Language");
};

const FreeVisit = (props) => {
	const navigation = useNavigation();

	const assignedSector = props.assignedSector;

	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	return (
		<View style={styles.container}>
			<View style={styles.mainContainer}></View>
			<Text style={styles.mainTitle}>
				{lang[preferredlangauge]["Free Visits On: "]}
				<Text style={styles.sectorInfo}>
					{lang[preferredlangauge]["Sector"]} {assignedSector}
				</Text>
			</Text>
			<Pressable
				style={styles.findPatientButton}
				onPress={() => navigation.navigate("FindPatient")}
			>
				<Text style={styles.findPatientButtonText}>
					{lang[preferredlangauge]["Find Patient"]}
				</Text>
			</Pressable>
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
