import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";

const InputField = (props) => {
	let iconSource = null;
	if (props.type === "email") {
		iconSource = require("../assets/icons/emailIcon.png");
	} else if (props.type === "password") {
		iconSource = require("../assets/icons/passwordIcon.png");
	} else if (props.type === "otp") {
		iconSource = require("../assets/icons/passwordIcon.png");
	}

	return (
		<View>
			<View style={styles.loginInput}>
				<Image source={iconSource} style={styles.icon} />
				<TextInput
					style={styles.input}
					placeholder={props.placeholder}
					placeholderTextColor="gray"
					onChangeText={props.onChange}
					value={props.value}
					secureTextEntry={props.type === "password"}
					keyboardType={
						props.type === "number" ? "numeric" : "default"
					}
					autoCapitalize="none"
					autoCorrect={false}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	loginInput: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#f0f0f0",
		justifyContent: "center",
		borderRadius: 6,
		padding: 15,
		borderWidth: 1,
		borderColor: "rgba(2, 4, 3, 0.5)",
		marginVertical: 10,
		width: 500,
	},
	icon: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: 32,
		height: 32,
		padding: 10,
		marginLeft: 10,
		marginRight: 5,
	},
	input: {
		width: "95%",
		height: 35,
		color: "black",
		fontSize: 20,
		padding: 8,
		fontSize: 18,
	},
});

export default InputField;
