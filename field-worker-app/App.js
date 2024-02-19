// import Animated, {
// 	useSharedValue,
// 	withTiming,
// 	useAnimatedStyle,
// 	Easing,
// } from "react-native-reanimated";
import React from "react";
import { Text, View } from "react-native";
// import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
