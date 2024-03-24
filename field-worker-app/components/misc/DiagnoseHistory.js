import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../../database/language";
import AppStyles from "../../AppStyles";

const DiagnoseHistory = () => {
	const navigation = useNavigation();

	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	function viewPrescription(date) {
		console.log(date);
		navigation.navigate("Prescription");
	}

	return (
		<View style={styles.container}>
			<Text style={AppStyles.subHeading}>
				{lang[preferredlangauge]["Diagnose History"]}
			</Text>
			<View style={styles.table}>
				<View style={styles.tableRow}>
					<Text style={[styles.tableHeader, styles.header]}>
						{lang[preferredlangauge]["Date"]}
					</Text>
					<Text style={[styles.tableHeader, styles.header]}>
						{lang[preferredlangauge]["Disease"]}
					</Text>
					<Text style={[styles.tableHeader, styles.header]}>
						{lang[preferredlangauge]["Prescription"]}
					</Text>
				</View>
				<View style={styles.tableRow}>
					<Text style={styles.tableData}>12-06-2015</Text>
					<Text style={styles.tableData}>Malaria</Text>
					<Pressable
						onPress={() => viewPrescription("12-06-2015")}
						style={styles.eyeContainer}
					>
						<Image
							source={require("../../assets/icons/eye.png")}
							style={styles.img}
						/>
					</Pressable>
				</View>
				<View style={styles.tableRow}>
					<Text style={styles.tableData}>13-06-2015</Text>
					<Text style={styles.tableData}>Malaria</Text>
					<Pressable
						onPress={() => viewPrescription("13-06-2015")}
						style={styles.eyeContainer}
					>
						<Image
							source={require("../../assets/icons/eye.png")}
							style={styles.img}
						/>
					</Pressable>
				</View>
				<View style={styles.tableRow}>
					<Text style={styles.tableData}>14-06-2015</Text>
					<Text style={styles.tableData}>Malaria</Text>
					<Pressable
						onPress={() => viewPrescription("14-06-2015")}
						style={styles.eyeContainer}
					>
						<Image
							source={require("../../assets/icons/eye.png")}
							style={styles.img}
						/>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "80%",
		alignSelf: "center",
	},
	mainHeader: {
		textAlign: "center",
		marginTop: 44,
		fontSize: 26,
		fontWeight: "600",
		fontFamily: "Playfair Display",
	},
	table: {
		width: "100%",
		padding: 20,
	},
	tableRow: {
		flexDirection: "row",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		alignItems: "center",
	},
	tableHeader: {
		padding: 15,
		textAlign: "center",
		fontSize: 20,
		flex: 1,
		backgroundColor: AppStyles.color.primaryLight,
	},
	header: {
		fontWeight: "bold",
	},
	img: {
		width: 35,
		height: 20,
	},
	tableData: {
		padding: 12,
		textAlign: "center",
		fontSize: 18,
		flex: 1,
		fontWeight: "500",
	},
	eyeContainer: {
		flex: 1,
		alignItems: "center",
	},
});

export default DiagnoseHistory;
