import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";

import "../../AppStyles";
import AppStyles from "../../AppStyles";

const InputField = ({
	icon,
	type,
	lightBackground,
	placeholder,
	onChange,
	value,
}) => {
	let iconSource = null;
	// console.log(type);
	// let type = "text";

	if (type === "email") {
		type = "email";
		iconSource = require("../../assets/icons/emailIcon.png");
	} else if (type === "password") {
		type = "text";
		iconSource = require("../../assets/icons/passwordIcon.png");
	} else if (type === "otp") {
		type = "numeric";
		iconSource = require("../../assets/icons/passwordIcon.png");
	} else if (type === "patientDetail" || icon === "PatientDetail") {
		type = "text";
		iconSource = require("../../assets/icons/userIcon.png");
	}
	// if (props.type === "email") {
	// 	type = "email";
	// 	iconSource = require("../../assets/icons/emailIcon.png");
	// } else if (props.type === "password") {
	// 	type = "text";
	// 	iconSource = require("../../assets/icons/passwordIcon.png");
	// } else if (props.type === "otp") {
	// 	type = "numeric";
	// 	iconSource = require("../../assets/icons/passwordIcon.png");
	// } else if (
	// 	props.type === "patientDetail" ||
	// 	props.icon === "PatientDetail"
	// ) {
	// 	type = "text";
	// 	iconSource = require("../../assets/icons/userIcon.png");
	// }

	mainStyles = [styles.loginInput];
	inputStyles = [styles.input];
	if (lightBackground) {
		mainStyles.push(styles.lightBackground);
		inputStyles.push(styles.primaryColor);
	}
	// if (props.lightBackground) {
	// 	mainStyles.push(styles.lightBackground);
	// 	inputStyles.push(styles.primaryColor);
	// }

	return (
		<View>
			<View style={mainStyles}>
				<Image source={iconSource} style={styles.icon} />
				<TextInput
					style={inputStyles}
					placeholder={placeholder}
					placeholderTextColor="gray"
					onChangeText={onChange}
					value={value}
					secureTextEntry={type === "password"}
					inputMode={type}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				{/* <TextInput
					style={inputStyles}
					placeholder={props.placeholder}
					placeholderTextColor="gray"
					onChangeText={props.onChange}
					value={props.value}
					secureTextEntry={props.type === "password"}
					inputMode={type}
					autoCapitalize="none"
					autoCorrect={false}
				/> */}
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
	lightBackground: {
		// backgroundColor: AppStyles.color.primaryLight,
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
		height: 36,
		color: "black",
		fontSize: 18,
		padding: 8,
	},
	primaryColor: {
		color: AppStyles.color.primary,
	},
});

export default InputField;
