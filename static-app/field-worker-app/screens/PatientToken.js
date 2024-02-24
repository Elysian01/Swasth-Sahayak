import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import InputField from "../components/inputs/InputField";
import Button from "../components/misc/Button";

const PatientToken = () => {
	const navigation = useNavigation();

	const [token, setToken] = useState("");
	const tokenChangeHandler = (e) => {
		setToken(e.target.value);
	};
	return (
		<View>
			<Navbar />
			<WorkerDetails />

			<Text style={styles.pageHeading}>Patient Token</Text>

			<View style={styles.inputs}>
				<InputField
					id="token"
					type="patientDetail"
					placeholder="Enter Patient Token"
					onChange={tokenChangeHandler}
					value={token}
					lightBackground={true}
				/>
				<View style={styles.btn}>
					<Button
						type="primary"
						navigateTo="Home"
						text="Submit"
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	pageHeading: {
		textAlign: "center",
		fontSize: 30,
		fontWeight: "600",
		marginBottom: 25,
	},
	inputs: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	btn: {
		marginVertical: 18,
	},
});

export default PatientToken;
