import React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Home from "../screens/Home";
import ForgotPassword from "../screens/ForgotPassword";
import LanguageSelection from "../screens/LanguageSelection";
import ResetPassword from "../screens/ResetPassword";
import FindPatient from "../screens/FindPatient";
import PatientToken from "../screens/PatientToken";
import Profile from "../screens/Profile";
import RegisterPatient from "../screens/RegisterPatient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PatientDashboard from "../screens/PatientDashboard";
import Questionnaire from "../screens/Questionnaire";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	// const [accessTokenExists, setAccessTokenExists] = useState(false);
	// useEffect(() => {
	// 	const checkAccessToken = async () => {
	// 		try {
	// 			const token = await AsyncStorage.getItem("AccessToken");
	// 			if (token !== null) {
	// 				setAccessTokenExists(true);
	// 			} else {
	// 				setAccessTokenExists(false);
	// 			}
	// 		} catch (error) {
	// 			console.error("Error checking access token:", error);
	// 		}
	// 	};
	// 	checkAccessToken();
	// }, []);
	// return (
	// 	<NavigationContainer>
	// 		<Stack.Navigator screenOptions={{ headerShown: false }}>
	// 			{accessTokenExists ? (
	// 				<>
	// 					<Stack.Screen name="Home" component={Home} />
	// 					<Stack.Screen
	// 						name="Followup"
	// 						component={Followup}
	// 					/>
	// 					<Stack.Screen
	// 						name="PatientToken"
	// 						component={PatientToken}
	// 					/>
	// 					<Stack.Screen
	// 						name="Profile"
	// 						component={Profile}
	// 					/>
	// 					<Stack.Screen
	// 						name="PatientDashboard"
	// 						component={PatientDashboard}
	// 					/>
	// 					<Stack.Screen
	// 						name="RegisterPatient"
	// 						component={RegisterPatient}
	// 					/>
	// 				</>
	// 			) : (
	// 				<>
	// 					<Stack.Screen
	// 						name="LanguageSelection"
	// 						component={LanguageSelection}
	// 					/>
	// 					<Stack.Screen name="Login" component={Login} />
	// 					<Stack.Screen
	// 						name="ForgotPassword"
	// 						component={ForgotPassword}
	// 					/>
	// 					<Stack.Screen
	// 						name="ResetPassword"
	// 						component={ResetPassword}
	// 					/>
	// 					<Stack.Screen
	// 						name="FindPatient"
	// 						component={FindPatient}
	// 					/>
	// 				</>
	// 			)}
	// 		</Stack.Navigator>
	// 	</NavigationContainer>
	// );
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen
					name="Questionnaire"
					component={Questionnaire}
				/>
				<Stack.Screen
					name="LanguageSelection"
					component={LanguageSelection}
				/>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Home" component={Home} />
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
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen
					name="PatientDashboard"
					component={PatientDashboard}
				/>
				<Stack.Screen
					name="RegisterPatient"
					component={RegisterPatient}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
