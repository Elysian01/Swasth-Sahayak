import {
	StyleSheet,
	Text,
	View,
	Pressable,
	Alert,
	ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import { Dropdown } from "react-native-element-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import PageHeading from "../components/headers/PageHeading";

import AppStyles from "../AppStyles";

const DoctorSelection = (props) => {
	const navigation = useNavigation();

	const patientAbhaId = props.route.params["patient_abhaid"];

	const [isChecked, setChecked] = useState(false);
	const [selectedDoctor, setSelectedDoctor] = useState("");
	const [doctorList, setDoctorList] = useState([]);
	// const [bookedSlot, setBookedSlot] = useState([]);
	// const [slotList, setSlotList] = useState([]);
	// const [availableSlotsList, setAvailableSlotsList] = useState([]);
	const [isFocus1, setIsFocus1] = useState(false);
	// const [isFocus2, setIsFocus2] = useState(false);

	const getDoctors = async () => {
		uploadData = await AsyncStorage.getItem("uploadData");
		uploadData = JSON.parse(uploadData);
		console.log(uploadData);
		tempDoctorList = uploadData["doctors"];
		console.log(tempDoctorList);

		availableDoctors = [];
		for (const detail of tempDoctorList) {
			if (detail["open_slots"] > 0) {
				availableDoctors.push(detail);
			}
		}
		setDoctorList(availableDoctors);
	};

	useEffect(() => {
		getDoctors();
	}, []);

	// useEffect(() => {
	// 	openSlotList = [];
	// 	slotList.map((slot) => {
	// 		if (slot["open_slots"] > 0) {
	// 			openSlotList.push(slot);
	// 		}
	// 		setAvailableSlotsList(openSlotList);
	// 	});
	// }, [slotList]);

	const submit = async () => {
		if (!selectedDoctor || !isChecked) {
			Alert.alert("Incomplete", "Please Fill in all the details");
			return;
		}
		console.log("Selected Doctor: ", selectedDoctor);

		// const updatedDoctors = availableDoctors.map((doctor) => {
		// 	if (doctor["doctor_name"] === selectedDoctor) {
		// 		return {
		// 			...doctor,
		// 			"open_slots": Math.max(0, doctor["open_slots"] - 1),
		// 		};
		// 	}
		// 	return doctor;
		// });

		const updatedDoctors = availableDoctors.map((doctor) =>
			doctor["doctor_name"] === selectedDoctor
				? {
						...doctor,
						open_slots: Math.max(0, doctor["open_slots"] - 1),
				  }
				: doctor
		);

		chosenDoctorData = {
			doctor_id: selectedDoctor,
			patient_abhaid: patientAbhaId,
		};

		uploadData = await AsyncStorage.getItem("uploadData");
		uploadData = JSON.parse(uploadData);
		uploadData["doctors"] = updatedDoctors;
		uploadData["chosen_doctor"].push(chosenDoctorData);
		console.log("Updated: ", uploadData);
		await AsyncStorage.setItem("uploadData", JSON.stringify(uploadData));
		navigation.navigate("Home");
	};

	return (
		<ScrollView>
			<Navbar />
			<WorkerDetails />
			<PageHeading text="Doctor Selection" />
			{/* <PageHeading text={lang[preferredlangauge]["Questionnaire"]} /> */}
			<View style={styles.line}></View>

			<View style={styles.section1}>
				<Dropdown
					style={[
						styles.dropdown,
						isFocus1 && {
							borderColor: AppStyles.color.primary,
						},
					]}
					placeholderStyle={styles.placeholderStyle}
					selectedTextStyle={styles.selectedTextStyle}
					inputSearchStyle={styles.inputSearchStyle}
					iconStyle={styles.iconStyle}
					// data={data}
					data={doctorList}
					search
					maxHeight={300}
					labelField="doctor_name"
					valueField="doctor_id"
					placeholder={!isFocus1 ? "Select Doctor" : "..."}
					searchPlaceholder="Search Doctor..."
					value={selectedDoctor}
					onFocus={() => setIsFocus1(true)}
					onBlur={() => setIsFocus1(false)}
					onChange={(item) => {
						// console.log("Item: ", item["doctor_name"]);
						setSelectedDoctor(item["doctor_id"]);
						// setSlotList(item["slot_list"]);
						setIsFocus1(false);
					}}
				/>

				{/* <Dropdown
					style={[
						styles.dropdown,
						isFocus2 && {
							borderColor: AppStyles.color.primary,
						},
					]}
					placeholderStyle={styles.placeholderStyle}
					selectedTextStyle={styles.selectedTextStyle}
					inputSearchStyle={styles.inputSearchStyle}
					iconStyle={styles.iconStyle}
					data={availableSlotsList}
					search
					maxHeight={300}
					labelField="date"
					valueField="date"
					placeholder={!isFocus2 ? "Select item" : "..."}
					searchPlaceholder="Search..."
					value={bookedSlot}
					onFocus={() => setIsFocus2(true)}
					onBlur={() => setIsFocus2(false)}
					onChange={(item) => {
						console.log("item: ", item["date"]);
						setBookedSlot(item["date"]);
						setIsFocus2(false);
					}}
				/> */}
			</View>

			<View style={styles.section2}>
				<Checkbox
					style={styles.checkbox}
					value={isChecked}
					onValueChange={setChecked}
					color={isChecked ? AppStyles.color.primary : undefined}
				/>
				<Text style={styles.paragraph}>
					Agree to our terms and conditions, that your data can
					be used by the authorized doctors, field-workers and by
					the required management
				</Text>
			</View>
			<View style={styles.btn}>
				<Pressable onPress={submit} style={AppStyles.primaryBtn}>
					{/* <Text style={AppStyles.primaryBtnText}>
						{lang[preferredlangauge]["Submit"]}
					</Text> */}
					<Text style={AppStyles.primaryBtnText}>Submit</Text>
				</Pressable>
			</View>
		</ScrollView>
	);
};

export default DoctorSelection;

const styles = StyleSheet.create({
	line: {
		backgroundColor: "#000",
		height: 2,
		width: "80%",
		alignSelf: "center",
		marginBottom: 10,
	},
	section1: {
		flexDirection: "row",
		width: "80%",
		alignSelf: "center",
		justifyContent: "space-around",
		margin: 20,
	},
	section2: {
		flexDirection: "row",
		width: "80%",
		alignSelf: "center",
		margin: 20,
	},
	dropdown: {
		height: 50,
		width: 275,
		borderColor: "gray",
		borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
	},
	icon: {
		marginRight: 5,
	},
	label: {
		position: "absolute",
		backgroundColor: "white",
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 14,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 16,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
	checkbox: {
		margin: 8,
	},
	btn: {
		alignSelf: "center",
		margin: 5,
	},
});
