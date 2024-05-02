import {
	StyleSheet,
	View,
	TextInput,
	ScrollView,
	Pressable,
	Text,
	Alert,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import { useNavigation } from "@react-navigation/native";
import PageHeading from "../components/headers/PageHeading";
import "../AppStyles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../database/language";

const RegisterPatient = () => {
	const navigation = useNavigation();

	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const [gender, setGender] = useState("Male");
	const [registerLanguage, setRegisterLanguage] = useState("English");
	const [pickerGenderVisible, setPickerGenderVisible] = useState(false);
	const [pickerLanguageVisible, setpickerLanguageVisible] = useState(false);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [showDatePicker, setShowDatePicker] = useState(false);

	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [abhaID, setAbhaID] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [sector, setSector] = useState("");
	const [pincode, setPincode] = useState("");

	const handleDateChange = (event, newDate) => {
		setShowDatePicker(Platform.OS === "ios");
		if (newDate !== undefined) {
			setSelectedDate(newDate);
			setShowDatePicker(false);
		}
	};

	const showDatePickerAndroid = () => {
		setShowDatePicker(true);
	};
	const handleGenderPress = () => {
		// Open the dropdown here
		setPickerGenderVisible(true);
	};
	const handleGenderSelect = (gender) => {
		setGender(gender);
		setPickerGenderVisible(false);
	};
	const handleLanguagePress = () => {
		// Open the dropdown here
		setpickerLanguageVisible(true);
	};
	const handleLanguageSelect = (Language) => {
		setRegisterLanguage(Language);
		setpickerLanguageVisible(false);
	};

	const handleRegisterPatient = async () => {
		if (
			!firstname ||
			!lastname ||
			!abhaID ||
			!phoneNumber ||
			!address ||
			!sector ||
			!pincode
		) {
			Alert.alert("Incomplete Form", "Please fill in all fields.");
			return;
		}

		const patientData = {
			fieldworker_id: 1234,
			patient_name: `${firstname} ${lastname}`,
			patient_dob: selectedDate,
			patient_gender: gender,
			patient_abhaid: abhaID,
			patient_phoneNumber: phoneNumber,
			patient_address: address,
			patient_blockCode: sector,
			patient_pincode: pincode,
			patient_preferred_language: registerLanguage,
		};

		try {
			uploadData = await AsyncStorage.getItem("uploadData");
			uploadData = JSON.parse(uploadData);
			console.log(uploadData);
			uploadData["patient_registeration"].push(patientData);
			console.log(uploadData);
			await AsyncStorage.setItem(
				"uploadData",
				JSON.stringify(uploadData)
			);
			await AsyncStorage.setItem("DataChangeStatus", "true");

			const tempAbhaid = abhaID;

			// Clear all fields
			setFirstname("");
			setLastname("");
			setAbhaID("");
			setPhoneNumber("");
			setAddress("");
			setSector("");
			setPincode("");
			setGender("Male"); // Assuming 'Male' is the default value
			setSelectedDate(new Date());
			setRegisterLanguage("English"); // Assuming 'English' is the default value

			Alert.alert("Success", "Patient Registered Successfully.");

			navigation.navigate("PatientDashboard", {
				patient_abhaid: tempAbhaid,
				new_patient: true,
				followUpDate: getDate(),
			});
		} catch (error) {
			console.error("Error saving data, please retry:", error);
		}
	};

	function getDate() {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, "0");
		var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		var yyyy = today.getFullYear();
		today = yyyy + "-" + mm + "-" + dd;
		return today;
	}

	return (
		<ScrollView automaticallyAdjustKeyboardInsets={true}>
			<Navbar />
			<WorkerDetails />
			<PageHeading
				text={lang[preferredlangauge]["Patient Registeration"]}
			/>

			<View style={styles.alignForm}>
				<View style={styles.group2}>
					<TextInput
						style={styles.input}
						placeholder={
							lang[preferredlangauge]["First Name"]
						}
						onChangeText={(text) => setFirstname(text)}
						value={firstname}
						maxLength={40}
						placeholderTextColor="#666"
						autoCapitalize="words"
					/>
					<TextInput
						style={styles.input}
						placeholder={lang[preferredlangauge]["Last Name"]}
						placeholderTextColor="#666"
						onChangeText={(text) => setLastname(text)}
						value={lastname}
						maxLength={40}
						autoCapitalize="words"
					/>
				</View>
				<View style={styles.group2}>
					<Pressable
						style={styles.input}
						onPress={handleGenderPress}
					>
						<Text style={styles.pickerText}>{gender}</Text>
						{pickerGenderVisible && (
							<Picker
								style={styles.picker}
								selectedValue={gender}
								onValueChange={(gender) =>
									handleGenderSelect(gender)
								}
							>
								<Picker.Item
									label={
										lang[preferredlangauge][
											"Male"
										]
									}
									value={
										lang[preferredlangauge][
											"Male"
										]
									}
								/>
								<Picker.Item
									label={
										lang[preferredlangauge][
											"Female"
										]
									}
									value={
										lang[preferredlangauge][
											"Female"
										]
									}
								/>
								<Picker.Item
									label={
										lang[preferredlangauge][
											"Other"
										]
									}
									value={
										lang[preferredlangauge][
											"Other"
										]
									}
								/>
							</Picker>
						)}
					</Pressable>
					<Pressable
						style={styles.input}
						onPress={showDatePickerAndroid}
					>
						<Text style={styles.text}>
							{selectedDate.toLocaleDateString()}
						</Text>
					</Pressable>
					{showDatePicker && (
						<DateTimePicker
							value={selectedDate}
							mode="date"
							display="default"
							onChange={handleDateChange}
						/>
					)}
				</View>
				<TextInput
					style={styles.input}
					placeholder={lang[preferredlangauge]["Abha-ID"]}
					placeholderTextColor="#666"
					onChangeText={(text) => setAbhaID(text)}
					value={abhaID}
					maxLength={16}
					inputMode="numeric"
				/>
				<TextInput
					style={styles.input}
					placeholder={lang[preferredlangauge]["Phone Number"]}
					placeholderTextColor="#666"
					onChangeText={(text) => setPhoneNumber(text)}
					value={phoneNumber}
					maxLength={10}
					inputMode="numeric"
					keyboardType="phone-pad"
				/>
				<TextInput
					style={styles.input}
					placeholder={lang[preferredlangauge]["Address"]}
					placeholderTextColor="#666"
					onChangeText={(text) => setAddress(text)}
					value={address}
				/>
				<View style={styles.group2}>
					<TextInput
						style={styles.input}
						placeholder={lang[preferredlangauge]["Sector"]}
						placeholderTextColor="#666"
						onChangeText={(text) => setSector(text)}
						value={sector}
						maxLength={3}
						inputMode="numeric"
						keyboardType="numeric"
					/>
					<TextInput
						style={styles.input}
						placeholder={lang[preferredlangauge]["Pincode"]}
						placeholderTextColor="#666"
						onChangeText={(text) => setPincode(text)}
						value={pincode}
						maxLength={6}
						inputMode="numeric"
						keyboardType="number-pad"
					/>
				</View>
				<Pressable
					style={styles.input}
					onPress={handleLanguagePress}
				>
					<Text style={styles.pickerText}>
						{registerLanguage}
					</Text>
					{pickerLanguageVisible && (
						<Picker
							style={styles.picker}
							selectedValue={registerLanguage}
							onValueChange={(registerLanguage) =>
								handleLanguageSelect(registerLanguage)
							}
						>
							<Picker.Item
								label="English"
								value="English"
							/>
							<Picker.Item label="हिंदी" value="हिंदी" />
						</Picker>
					)}
				</Pressable>

				<View style={styles.btn}>
					<Pressable
						onPress={handleRegisterPatient}
						style={styles.primary}
					>
						<Text style={styles.ButtonText}>
							{lang[preferredlangauge]["Submit"]}
						</Text>
					</Pressable>
				</View>
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	div2: {
		backgroundColor: "#fff",
		padding: 20,
		marginBottom: 10,
	},
	div3: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10,
	},
	alignForm: {
		justifyContent: "center",
		alignSelf: "center",
		margin: "auto",
		padding: 0,
		width: "85%",
	},
	group2: {
		flexDirection: "row",
		marginBottom: 10,
	},
	input: {
		flex: 1,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: AppStyles.color.primary,
		backgroundColor: "#f2f2f2",
		color: "#666",
		padding: 16,
		margin: 8,
		fontSize: 16,
	},
	text: {
		color: "#666",
		fontSize: 16,
		fontWeight: "600",
		textAlign: "auto",
	},
	pickerText: {
		alignSelf: "flex-start",
		fontSize: 16,
		color: "#666",
		backgroundColor: "#f2f2f2",
	},
	btn: {
		alignItems: "center",
	},
	primary: {
		backgroundColor: AppStyles.color.primary,
		maxWidth: 300,
		borderRadius: 7,
		paddingVertical: 15,
		paddingHorizontal: 25,
		marginVertical: 20,
		marginHorizontal: 20,
	},
	ButtonText: {
		color: "white",
		textAlign: "center",
		fontSize: 20,
		fontWeight: "600",
	},
});
export default RegisterPatient;
