import React from "react";
import { View, StyleSheet } from "react-native";
import PatientRecords from "../components/misc/PatientRecords";
import FreeVisit from "../components/misc/FreeVisit";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import PageHeading from "../components/headers/PageHeading";

const Followup = () => {
	return (
		<View style={styles.container}>
			<Navbar />
			<WorkerDetails />
			<PageHeading text="Follow-Up Schedule" />
			<PatientRecords />
			<FreeVisit />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		padding: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
});

export default Followup;
