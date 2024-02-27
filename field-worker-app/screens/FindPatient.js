import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import InputField from "../components/inputs/InputField";
import Button from "../components/misc/Button";
import PageHeading from "../components/headers/PageHeading";

const FindPatient = () => {
	const navigation = useNavigation();

	const [abhaId, setAbhaId] = useState("");
	const abhaIdChangeHandler = (e) => {
		setAbhaId(e.target.value);
	};
	return (
		<View>
			<Navbar />
			<WorkerDetails />

			{/* <Text style={styles.pageHeading}>Find Patient</Text> */}
			<PageHeading text="find patient" />

			<View style={styles.inputs}>
				<InputField
					id="abhaId"
					type="patientDetail"
					placeholder="Enter ABHA ID"
					onChange={abhaIdChangeHandler}
					value={abhaId}
					lightBackground={true}
				/>
				<View style={styles.btn}>
					<Button
						type="primary"
						navigateTo="Home"
						text="Find Patient"
					/>
					<Button
						type="primary"
						navigateTo="RegisterPatient"
						text="Register Patient"
					/>
				</View>
			</View>
		</View>
	);
};

export default FindPatient;

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
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "60%",
		marginVertical: 18,
	},
});
