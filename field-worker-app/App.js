import React from "react";
import Navigation from "./components/Navigation";
import { View, Image, Text, Dimensions, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import { tempUploadAPI } from "./api/APIs";
import AppStyles from "./AppStyles";
import { useEffect } from "react";
import { uploadAPI } from "./api/APIs";
import { INTERVAL_TIME } from "./config";

const minimumScreenWidth = Dimensions.get("window").width;

function App() {
	// const unsubscribe = NetInfo.addEventListener(async (state) => {
	// 	console.log("Is connected?", state.isConnected);
	// 	const status = await AsyncStorage.getItem("DataChangeStatus");
	// 	if (state.isConnected && status === "true") {
	// 		tempUploadAPI();
	// 		console.log("Uploaded");
	// 		await AsyncStorage.setItem("DataChangeStatus", "false");
	// 	}
	// });

	const checkNetworkAndDataChange = async () => {
		try {
			const state = await NetInfo.fetch();
			console.log("Is connected?", state.isConnected);
			const status = await AsyncStorage.getItem("DataChangeStatus");
			if (state.isConnected && status === "true") {
				await uploadAPI();
				console.log("Uploaded data to server");

				let data = await AsyncStorage.getItem("DownloadedData");
				data = JSON.parse(data);

				const uploadTemplate = {
					follow_up: data["follow_up"],
					questionnaire_response: [],
					fieldworker_comments: [],
					artifacts: [],
					doctors: data["doctors"],
					chosen_doctor: [],
					patient_registeration: [],
				};

				console.log(uploadTemplate);

				await AsyncStorage.setItem(
					"uploadData",
					JSON.stringify(uploadTemplate)
				);
				await AsyncStorage.setItem("DataChangeStatus", "false");
			}
		} catch (error) {
			console.error("Error checking network and data change:", error);
		}
	};

	const NetworkStatusListener = () => {
		useEffect(() => {
			const interval = setInterval(
				checkNetworkAndDataChange,
				INTERVAL_TIME
			); // Check every INTERVAL_TIME

			// Clean up the interval on unmount
			return () => clearInterval(interval);
		}, []);

		return null; // Since it's a listener component, it doesn't render anything
	};

	NetworkStatusListener();

	if (minimumScreenWidth < 650) {
		return (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require("./assets/icon.png")}
				></Image>
				<Text style={styles.text}>
					Your device's screen is too small to run this app, This
					Application is made for Health-worker who uses
					tablet/ipad.
				</Text>
			</View>
		);
	} else {
		return <Navigation />;
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "center",
	},
	image: {
		height: 75,
		width: 75,
		alignSelf: "center",
		padding: 10,
	},
	text: {
		fontSize: 20,
		fontWeight: "700",
		paddingHorizontal: 20,
		textAlign: "center",
		color: AppStyles.color.primary,
	},
});

export default App;
