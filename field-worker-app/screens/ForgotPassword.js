import React from "react";
import { useEffect, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	ScrollView,
	Alert,
} from "react-native";

import "../AppStyles";
import Navbar from "../components/headers/Navbar";
import InputField from "../components/inputs/InputField";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../database/language";

const ForgotPassword = () => {
	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const [email, setEmail] = useState("");
	const [emailGivenByUser, setEmailGivenByUser] = useState(false);

	const [otp, setOtp] = useState("");
	const [otpGivenByUser, setOtpGivenByUser] = useState(false);

	const [newPassword, setNewPassword] = useState("");
	const [reEnterNewPassword, setReEnterNewPassword] = useState("");

	const emailChangeHandler = (e) => {
		setEmail(e.target.value);
	};

	const otpChangeHandler = (e) => {
		setOtp(e.target.value);
	};

	function sendOTP(e) {
		setEmailGivenByUser(true);
	}

	function verifyOTP(e) {
		setOtpGivenByUser(true);
	}

	const newPasswordChangeHandler = (e) => {
		setNewPassword(e.target.value);
	};

	const reEnterNewPasswordChangeHandler = (e) => {
		setReEnterNewPassword(e.target.value);
	};

	function resetPassword(e) {
		if (newPassword === "" || reEnterNewPassword === "") {
			Alert.alert("Field Empty", "Please Enter Password");
		} else if (newPassword !== reEnterNewPassword) {
			Alert.alert(
				"Password Not Matching",
				"Password and Confirm Password Not Matching, please enter correct"
			);
			setNewPassword("");
			setReEnterNewPassword("");
		} else {
			alert("Password resetted successfully");
			navigate("/");
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
						{lang[preferredlangauge]["Forgot Password"]}
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

					{!emailGivenByUser && (
						<View>
							<InputField
								id="Email"
								type="email"
								placeholder={
									lang[preferredlangauge][
										"Enter Employee Email"
									]
								}
								onChange={emailChangeHandler}
								value={email}
							/>

							<TouchableOpacity
								onPress={sendOTP}
								style={styles.loginButton}
							>
								<Text style={styles.loginButtonText}>
									{
										lang[preferredlangauge][
											"Get OTP"
										]
									}
								</Text>
							</TouchableOpacity>
						</View>
					)}
					{emailGivenByUser && !otpGivenByUser && (
						<View>
							<InputField
								id="otp"
								type="otp"
								placeholder="Enter OTP"
								onChange={otpChangeHandler}
								value={otp}
							/>

							<TouchableOpacity
								onPress={verifyOTP}
								style={styles.loginButton}
							>
								<Text style={styles.loginButtonText}>
									Verify OTP
								</Text>
							</TouchableOpacity>
						</View>
					)}
					{emailGivenByUser && otpGivenByUser && (
						<View>
							<InputField
								id="password1"
								type="password"
								placeholder="Enter Password"
								onChange={newPasswordChangeHandler}
								value={newPassword}
							/>
							<InputField
								id="password2"
								type="password"
								placeholder="Confirm Password"
								onChange={
									reEnterNewPasswordChangeHandler
								}
								value={reEnterNewPassword}
							/>

							<TouchableOpacity
								onPress={resetPassword}
								style={styles.loginButton}
							>
								<Text style={styles.loginButtonText}>
									Reset this as New Password
								</Text>
							</TouchableOpacity>
						</View>
					)}
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

export default ForgotPassword;
