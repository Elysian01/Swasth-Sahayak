import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Dropdown from "../components/inputs/Dropdown";
import * as LocalAuthentication from "expo-local-authentication";

const LanguageSelection = () => {
	const navigation = useNavigation();
	const [preferredlangauge, setPreferredLanguage] = useState("");

	const handleAuthenticate = async () => {
		try {
			const result = await LocalAuthentication.authenticateAsync();
			if (result.success) {
				// Biometric authentication successful, proceed with login
				navigation.navigate("Home");
			} else {
				// Biometric authentication failed, handle accordingly
				Alert.alert("Biometric Authentication Failed");
			}
		} catch (error) {
			console.error("Biometric Authentication Error:", error);
			// Handle biometric authentication error
			Alert.alert("Biometric Authentication Error", error.message);
		}
	};

	const checkForLogin = async () => {
		const token = await AsyncStorage.getItem("AccessToken");
		console.log("Checking: ", token);
		if (!token) {
			navigation.navigate("LanguageSelection");
		} else {
			handleAuthenticate();
			// navigation.navigate("Home");
		}
	};

	function setLanguage() {
		if (preferredlangauge !== "") {
			AsyncStorage.setItem("Language", preferredlangauge);
			// AsyncStorage.getItem("Language").then((l) => {
			// 	console.log(l);
			// });
			navigation.navigate("Login");
		}
	}

	useEffect(() => {
		setTimeout(() => {
			checkForLogin();
		}, 100);
	});

	return (
		<View style={styles.container}>
			<View style={styles.greetings}>
				<Text style={styles.greetingsText1}>Welcome to</Text>
				<Text style={styles.greetingsText2}>Swasth Sahayak</Text>
			</View>
			<Image
				style={styles.image}
				source={require("../assets/images/login-bg.png")}
			></Image>
			<Text style={styles.subtext}>
				Please Enter Your Prefered Language
			</Text>
			<Dropdown
				lang={preferredlangauge}
				setLang={setPreferredLanguage}
			/>
			<Pressable style={styles.Button} onPress={() => setLanguage()}>
				<Text style={styles.ButtonText}>&#x2192;</Text>
			</Pressable>
		</View>
	);
};

export default LanguageSelection;

const styles = StyleSheet.create({
	container: {
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
	subtext: {
		marginBottom: 10,
		fontSize: 26,
	},
	Button: {
		backgroundColor: AppStyles.color.primary,
		borderRadius: 7,
		paddingVertical: 10,
		paddingHorizontal: 25,
		marginTop: 20,
		marginBottom: 50,
	},
	ButtonText: {
		color: "white",
		textAlign: "center",
		fontSize: 26,
		fontWeight: "900",
	},
});
