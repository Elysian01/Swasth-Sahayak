import React from "react";
import Navigation from "./components/Navigation";
import { View, Image, Text, Dimensions, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import AppStyles from "./AppStyles";
import { useEffect } from "react";
import { SYNC_INTERVAL_TIME } from "./config";
import checkNetworkAndDataChange from "./api/sync";

const minimumScreenWidth = Dimensions.get("window").width;

function App() {

	const NetworkStatusListener = () => {
		useEffect(() => {
			const interval = setInterval(
				checkNetworkAndDataChange,
				SYNC_INTERVAL_TIME
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
