import React,{useState} from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import Navbar from "../components/headers/Navbar";
import Button from "../components/misc/Button";
import PageHeading from "../components/headers/PageHeading";

import { lang } from "../database/language";

const getLanguage = async () => {
	return await AsyncStorage.getItem("Language");
}

const Profile = () => {

	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const navigation = useNavigation();

	async function logout() {
		try {
			console.log("logout");
			await AsyncStorage.removeItem("AccessToken");
			console.log("removed access token");
			navigation.navigate("LanguageSelection");
		} catch (exception) {
			console.error(exception);
			alert("Access Token was not removed");
		}
	}
	return (
		<View>
			<Navbar />
			<PageHeading text={lang[preferredlangauge]["Profile"]} />
			<Image
				source={require("../assets/images/doctor-page-profile-photo.png")}
				style={styles.doctorImage}
			/>
			<Text style={styles.doctorName}>Aakash Bhardwaj</Text>
			<Text style={styles.qualification}>{lang[preferredlangauge]["Neurosurgeon"]}</Text>
			<View style={styles.buttonArrangement}>
				<Pressable
					onPress={() => {
						navigation.navigate("ResetPassword");
					}}
					style={styles.btn}
				>
					<Button
						type="primary"
						navigateTo="ResetPassword"
						text={lang[preferredlangauge]["Reset Password"]}
					/>
				</Pressable>

				<View style={styles.btn}>
					<TouchableOpacity
						onPress={() => logout()}
						style={styles.primary}
					>
						<Text style={styles.ButtonText}>{lang[preferredlangauge]["Logout"]}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	profileName: {
		textAlign: "center",
		paddingTop: 11,
		paddingBottom: 30,
		lineHeight: 22,
		marginTop: 31,
		flex: 1,
		alignSelf: "stretch",
	},
	doctorImage: {
		alignSelf: "center",
		aspectRatio: 1,
		width: 250,
		height: 250,
	},
	doctorName: {
		textAlign: "center",
		marginTop: 32,
		fontSize: 36,
	},
	qualification: {
		textAlign: "center",
		marginTop: 12,
		fontSize: 22,
	},
	btn: {
		alignSelf: "center",
	},
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
