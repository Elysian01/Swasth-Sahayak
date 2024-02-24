import { StyleSheet, Text, View } from "react-native";
import React from "react";

import "../../AppStyles";
import AppStyles from "../../AppStyles";

const WorkerDetails = () => {
	const name = "Abhishek Gupta";
	const id = "430176";
	return (
		<View style={styles.container}>
			<Text style={styles.quote}>
				A doctor is a person who heals, while a nurse is a person
				who cares
			</Text>
			<View style={styles.workerDetails}>
				<Text style={styles.details}>Hello, {name}</Text>
				<Text style={styles.details}>ID: {id}</Text>
			</View>
		</View>
	);
};

export default WorkerDetails;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 50,
		marginVertical: 15,
	},
	quote: {
		color: AppStyles.color.primary,
		fontSize: 22,
		textAlign: "center",
		fontWeight: "bold",
		marginVertical: 20,
	},
	workerDetails: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	details: {
		fontSize: 18,
		marginVertical: 7,
	},
});
