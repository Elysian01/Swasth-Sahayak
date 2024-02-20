import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import "../../AppStyles";

const Button = (props) => {
	const navigation = useNavigation();

	let btnStyle = "styles." + props.type;
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(props.navigateTo)}
			style={styles.primary}
		>
			<Text style={styles.ButtonText}>{props.text}</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	primary: {
		backgroundColor: AppStyles.color.primary,
		maxWidth: 250,
		borderRadius: 7,
		paddingVertical: 15,
		paddingHorizontal: 25,
		marginVertical: 20,
		marginHorizontal: 20,
	},
	ButtonText: {
		color: "white",
		textAlign: "center",
		fontSize: 20,
		fontWeight: "600",
	},
});
