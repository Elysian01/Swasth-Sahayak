import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import Button from "../components/misc/Button";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Navbar />
			<WorkerDetails />
			<Text style={styles.downloadText}>
				Sector Data:
				<Text style={styles.downloadStatus}> Not Downloaded</Text>
			</Text>
			<View style={styles.btn}>
				<Button
					type="primary"
					navigateTo="Followup"
					text="Download Sector Data"
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	downloadText: {
		fontSize: 22,
		fontWeight: "500",
		color: "black",
		textAlign: "center",
	},
	downloadStatus: {
		color: "red",
	},
	btn: {
		alignItems: "center",
	},
});

export default HomeScreen;
