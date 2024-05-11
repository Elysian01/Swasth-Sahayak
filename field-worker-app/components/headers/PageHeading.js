import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PageHeading = ({ text }) => {
	return (
		<View>
			<Text style={styles.heading}>{text}</Text>
		</View>
	);
};

export default PageHeading;

const styles = StyleSheet.create({
	heading: {
		textAlign: "center",
		fontSize: 30,
		fontWeight: "600",
		marginBottom: 25,
		textTransform: "capitalize",
	},
});
