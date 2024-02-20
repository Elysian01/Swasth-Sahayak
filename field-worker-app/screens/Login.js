import React from "react";
import { useEffect, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import "../AppStyles";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";

const Login = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Navbar />

			<ScrollView automaticallyAdjustKeyboardInsets={true}>
				<View style={styles.loginContainer}>
					<View style={styles.greetings}>
						<Text style={styles.greetingsText1}>
							Welcome to
						</Text>
						<Text style={styles.greetingsText2}>
							Swasth Sahayak
						</Text>
					</View>

					<Image
						style={styles.image}
						source={require("../assets/images/login-bg.png")}
					></Image>

					<Text style={styles.loginHeading}>Login</Text>
					<View>
						<Text style={styles.subtext}>
							Please Enter Below Details
						</Text>
					</View>

					<InputField
						type="email"
						placeholder="Enter Employee Email"
					/>

					<InputField
						type="password"
						placeholder="Enter Password"
					/>

					<TouchableOpacity
						onPress={() =>
							navigation.navigate("ForgotPassword")
						}
					>
						<View style={styles.forgotPasswordDiv}>
							<Text style={styles.forgotPassword}>
								Forgot Password?
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity 
					style={styles.loginButton}
					onPress={()=>navigation.navigate("HomeScreen") }
					>
						<Text style={styles.loginButtonText}>Login</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 0,
		padding: 0,
	},
	loginContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	greetings: {
		marginVertical: 40,
		alignItems: "center",
	},
	greetingsText1: {
		fontSize: 40,
	},
	greetingsText2: {
		color: AppStyles.color.primary,
		fontSize: 50,
	},
	image: {
		height: 400,
	},
	loginHeading: {
		fontSize: 30,
		marginBottom: 10,
	},
	subtext: {
		marginBottom: 10,
		fontSize: 18,
	},
	forgotPasswordDiv: {
		marginLeft: 350,
		marginTop: 5,
	},
	forgotPassword: {
		color: AppStyles.color.primary,
		fontSize: 16,
		textDecorationLine: "underline",
	},
	loginButton: {
		backgroundColor: AppStyles.color.primary,
		borderRadius: 7,
		paddingVertical: 10,
		paddingHorizontal: 50,

		marginTop: 20,
	},
	loginButtonText: {
		color: "white",
		textAlign: "center",
		fontSize: 24,
		fontWeight: "600",
	},
});

export default Login;
