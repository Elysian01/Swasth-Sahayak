import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PageHeading = (props) => {
	return (
		<View>
			<Text style={styles.heading}>{props.text}</Text>
		</View>
	);
};

export default PageHeading;

const styles = StyleSheet.create({
	heading: {
		textAlign: "center",
		fontSize: 30,
		fontWeight: "600",
		marginVertical: 25,
		textTransform: "capitalize",
	},
});
