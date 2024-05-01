import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Dropdown from "../components/inputs/Dropdown";
import dbFunctions from "../api/Queries";

const LanguageSelection = () => {
	// async function someFunction() {
	// 	try {
	// 		const result = await dbFunctions.createImagesTable();
	// 		console.log(result);

	// 		await dbFunctions.deleteAllImages();

	// 		const r = await dbFunctions.insertImage(
	// 			"1234567887654321",
	// 			"oergvngoejnvzsdo niu3qtoi3lkfvbjfvheifdkjvj h diuf g"
	// 		);
	// 		console.log(r);
	// 		const r2 = await dbFunctions.insertImage(
	// 			"1234567887654321",
	// 			"dksd"
	// 		);
	// 		console.log(r2);
	// 		const r3 = await dbFunctions.insertImage(
	// 			"1234567887654321",
	// 			"asas"
	// 		);
	// 		console.log(r3);
	// 		const r4 = await dbFunctions.getAllImages();
	// 		console.log(r4);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }

	// someFunction();

	const navigation = useNavigation();
	const [preferredlangauge, setPreferredLanguage] = useState("");

	const checkForLogin = async () => {
		const token = await AsyncStorage.getItem("AccessToken");
		if (!token) {
			navigation.navigate("LanguageSelection");
		} else {
			navigation.navigate("Home");
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
