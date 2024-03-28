import { StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import "../../AppStyles";

const Button = (props) => {
	const navigation = useNavigation();
	console.log("Button Navi:", props.navigateTo);
	let btnStyle = "styles." + props.type;
	return (
		<Pressable
			onPress={() =>
				props.navigateTo && navigation.navigate(props.navigateTo)
			}
			style={styles.primary}
		>
			<Text style={styles.ButtonText}>{props.text}</Text>
		</Pressable>
	);
};

export default Button;

const styles = StyleSheet.create({
	primary: {
		backgroundColor: AppStyles.color.primary,
		maxWidth: 300,
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
