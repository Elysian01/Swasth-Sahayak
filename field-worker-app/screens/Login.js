import React, { useState } from "react";
import {
	View,
	Text,
	Pressable,
	StyleSheet,
	Image,
	ScrollView,
	Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import "../AppStyles";
import Navbar from "../components/headers/Navbar";
import InputField from "../components/inputs/InputField";

import { loginAPI } from "../api/UserAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../language";

const getLanguage = async () => {
	return await AsyncStorage.getItem("Language");
};

const Login = () => {
	const navigation = useNavigation();
	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const emailChangeHandler = (e) => {
		setEmail(e.target.value);
	};

	const passwordChangeHandler = (e) => {
		setPassword(e.target.value);
	};

	function handleLogin() {
		if (email !== "" && password !== "") {
			loginAPI({
				email: email,
				password: password,
			})
				.then((result) => {
					if (result.status === 200) {
						console.log(result);
						AsyncStorage.setItem(
							"AccessToken",
							result.data.jwtToken
						);
						console.log(result.data.jwtToken);
						navigation.navigate("Home");
					} else if (result.status === 401) {
						console.log(result.status);
						Alert.alert("Error", result.data, []);
					}
				})
				.catch((error) => {
					console.log(error);
					Alert.alert("Error", error);
				});
		}
	}

	return (
		<View style={styles.container}>
			<Navbar />

			<ScrollView automaticallyAdjustKeyboardInsets={true}>
				<View style={styles.loginContainer}>
					<View style={styles.greetings}>
						<Text style={styles.greetingsText1}>
							{lang[preferredlangauge]["Welcome to"]}
						</Text>
						<Text style={styles.greetingsText2}>
							{lang[preferredlangauge]["Swasth Sahayak"]}
						</Text>
					</View>
					<Image
						style={styles.image}
						source={require("../assets/images/login-bg.png")}
					></Image>

					<Text style={styles.loginHeading}>
						{lang[preferredlangauge]["login"]}
					</Text>
					<View>
						<Text style={styles.subtext}>
							{
								lang[preferredlangauge][
									"Please Enter Below Details"
								]
							}
						</Text>
					</View>

					<InputField
						id="email1"
						type="email"
						placeholder="Enter Employee Email"
						onChange={emailChangeHandler}
						value={email}
					/>

					<InputField
						id="pass1"
						type="password"
						placeholder="Enter Password"
						onChange={passwordChangeHandler}
						value={password}
					/>

					<Pressable
						onPress={() =>
							navigation.navigate("ForgotPassword")
						}
					>
						<View style={styles.forgotPasswordDiv}>
							<Text style={styles.forgotPassword}>
								Forgot Password?
							</Text>
						</View>
					</Pressable>

					<Pressable
						onPress={() => {
							handleLogin();
						}}
						style={styles.loginButton}
					>
						<Text style={styles.loginButtonText}>
							{lang[preferredlangauge]["login"]}
						</Text>
					</Pressable>
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
		marginBottom: 50,
	},
	loginButtonText: {
		color: "white",
		textAlign: "center",
		fontSize: 24,
		fontWeight: "600",
	},
});

export default Login;
