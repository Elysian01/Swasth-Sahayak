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

const ResetPassword = () => {
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [reEnterNewPassword, setReEnterNewPassword] = useState("");

	const oldPasswordChangeHandler = (e) => {
		setOldPassword(e.target.value);
	};
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
					<Image
						style={styles.image}
						source={require("../assets/images/login-bg.png")}
					></Image>

					<Text style={styles.loginHeading}>Reset Password</Text>
					<View>
						<Text style={styles.subtext}>
							Please Enter Below Details
						</Text>
					</View>

					<View>
						<InputField
							id="password1"
							type="password"
							placeholder="Enter Old Password"
							onChange={oldPasswordChangeHandler}
							value={oldPassword}
						/>
						<InputField
							id="password2"
							type="password"
							placeholder="Enter New Password"
							onChange={newPasswordChangeHandler}
							value={newPassword}
						/>
						<InputField
							id="password3"
							type="password"
							placeholder="Re-Enter New Password"
							onChange={reEnterNewPasswordChangeHandler}
							value={reEnterNewPassword}
						/>

						<TouchableOpacity
							onPress={resetPassword}
							style={styles.loginButton}
						>
							<Text style={styles.loginButtonText}>
								Reset Password
							</Text>
						</TouchableOpacity>
					</View>
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
	image: {
		height: 400,
		marginTop: 25,
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

export default ResetPassword;
