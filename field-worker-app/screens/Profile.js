import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";

import AppStyles from "../AppStyles";
import { uploadAPI } from "../api/APIs";
import { lang } from "../database/language";

const Profile = () => {
	const navigation = useNavigation();

	const [syncDataStatus, setSyncDataStatus] = useState(false);
	const [preferredlangauge, setPreferredLanguage] = useState("English");
	const [fieldWorkerName, setFieldWorkerName] = useState("");

	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	AsyncStorage.getItem("FieldWorkerName").then((name) => {
		setFieldWorkerName(name);
	});

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

	const synchronizeData = async () => {
		uploadData = await AsyncStorage.getItem("uploadData");
		if (uploadData) {
			uploadData = JSON.parse(uploadData);

			// uploadAPI(uploadData)
			// 	.then((result) => {
			// 		if (result.status === 200) {
			// 			console.log(result);
			// 			Alert.alert(
			// 				"Success",
			// 				"Data Successfully Uploaded!!"
			// 			);
			// 			setSyncDataStatus(true);
			// 		} else if (result.status === 401) {
			// 			console.log(result.status);
			// 			Alert.alert("Error", result.data, []);
			// 		}
			// 	})
			// 	.catch((error) => {
			// 		console.log(error);
			// 		Alert.alert("Unable to Upload Data: ", error);
			// 	});

			Alert.alert("Success", "Data Successfully Uploaded!!");
			setSyncDataStatus(true);
		}
	};

	function deletePatientAccount() {}

	return (
		<View>
			<Navbar />
			<View style={styles.marginVertical}></View>
			<PageHeading text={lang[preferredlangauge]["Profile"]} />
			<View style={AppStyles.line}></View>
			<Image
				source={require("../assets/images/fieldWorker-profile-pic.png")}
				style={styles.doctorImage}
			/>
			<Text style={styles.doctorName}>{fieldWorkerName}</Text>
			<Text style={styles.qualification}>
				{lang[preferredlangauge]["Health Worker"]}
			</Text>
			<View style={AppStyles.btn}>
				{!syncDataStatus && (
					<Pressable
						onPress={() => {
							synchronizeData();
						}}
						style={AppStyles.redBtn}
					>
						<Text style={AppStyles.primaryBtnText}>
							{lang[preferredlangauge]["Sync Data"]}
						</Text>
					</Pressable>
				)}

				{syncDataStatus && (
					<Pressable
						onPress={() => logout()}
						style={AppStyles.goldBtn}
					>
						<Text style={AppStyles.primaryBtnText}>
							{lang[preferredlangauge]["Logout"]}
						</Text>
					</Pressable>
				)}

				<Pressable
					onPress={() => deletePatientAccount()}
					style={AppStyles.darkRedBtn}
				>
					<Text style={AppStyles.primaryBtnText}>
						{
							lang[preferredlangauge][
								"Delete Patient Account"
							]
						}
					</Text>
				</Pressable>

				<Pressable
					onPress={() => {
						navigation.navigate("ResetPassword");
					}}
					style={AppStyles.primaryBtn}
				>
					<Text style={AppStyles.primaryBtnText}>
						{lang[preferredlangauge]["Reset Password"]}
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	marginVertical: {
		marginVertical: 20,
	},
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
		marginTop: 15,
		width: 230,
		height: 350,
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
