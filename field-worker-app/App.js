// import Animated, {
// 	useSharedValue,
// 	withTiming,
// 	useAnimatedStyle,
// 	Easing,
// } from "react-native-reanimated";
import React from "react";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import * as Camera from "expo-camera";

function App() {
	useEffect(async () => {
		let { status } = await Camera.requestMediaLibraryPermissionsAsync();
		if (status !== "granted") {
			Alert.alert(
				"Permission Required",
				"Please grant access to files to proceed.",
				[
					{
						text: "OK",
						onPress: () => console.log("OK Pressed"),
						style: "cancel",
					},
				]
			);
			return;
		}
	}, []);

	return <Navigation />;
}

export default App;
