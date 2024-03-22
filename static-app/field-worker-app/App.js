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
import ForgotPassword from "./screens/ForgotPassword";
import PatientToken from "./screens/PatientToken";
import LanguageSelection from "./screens/LanguageSelection";
import ResetPassword from "./screens/ResetPassword";
import FindPatient from "./screens/FindPatient";
import Followup from "./screens/Followup";
import VerifyPatient from "./screens/PatientToken";
import PatientDashboard from "./screens/PatientDashboard";
import Profile from "./screens/Profile";
const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen
					name="LanguageSelection"
					component={LanguageSelection}
				/>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen
					name="ForgotPassword"
					component={ForgotPassword}
				/>
				<Stack.Screen
					name="PatientToken"
					component={PatientToken}
				/>
				<Stack.Screen
					name="ResetPassword"
					component={ResetPassword}
				/>
				<Stack.Screen name="FindPatient" component={FindPatient} />
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="Followup" component={Followup} />
				<Stack.Screen
					name="PatientDashboard"
					component={PatientDashboard}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;