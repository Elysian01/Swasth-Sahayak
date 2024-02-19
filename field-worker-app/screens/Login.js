import React from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";

import Navbar from "../components/Navbar";

const Login = () => {
	return (
		<View style={styles.container}>
			<Navbar />
			{/* <View style={styles.loginContainer}>
				<View style={styles.greetings}>
					<Text style={styles.greetingsText1}>Welcome to</Text>
					<Text style={styles.greetingsText2}>
						Swasth Sahayak
					</Text>
				</View>
				<Text style={styles.loginHeading}>Login</Text>
				<View style={styles.subtext}>
					<Text>Please Enter Below Details</Text>
				</View>

				<TextInput
					style={styles.input}
					placeholder="Employee Email"
					keyboardType="email-address"
				/>

				<TextInput
					style={styles.input}
					placeholder="Password"
					secureTextEntry={true}
				/>

				<TouchableOpacity>
					<Text style={styles.forgotPassword}>
						Forgot Password?
					</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.loginButton}>
					<Text style={styles.loginButtonText}>Login</Text>
				</TouchableOpacity>
			</View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// Add styles for Navbar
	},
	loginContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	greetings: {
		alignItems: "center",
		marginBottom: 30,
	},
	greetingsText1: {
		fontSize: 24,
	},
	greetingsText2: {
		color: "blue", // your primary color
		fontSize: 28,
	},
	loginHeading: {
		fontSize: 24,
		marginBottom: 10,
	},
	subtext: {
		marginBottom: 10,
	},
	input: {
		width: "100%",
		height: 40,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	forgotPassword: {
		color: "blue", // your primary color
		textAlign: "right",
		marginBottom: 10,
	},
	loginButton: {
		backgroundColor: "blue", // your primary color
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	loginButtonText: {
		color: "white",
		textAlign: "center",
		fontSize: 18,
	},
});

export default Login;
