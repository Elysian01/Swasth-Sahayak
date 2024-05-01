import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	ScrollView,
	Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppStyles from "../AppStyles";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import WorkerDetails from "../components/headers/WorkerDetails";
import dbFunctions from "../api/Queries";

const AddImages = (props) => {
	const navigation = useNavigation();

	const [patientAbhaId, setPatientAbhaId] = useState("");
	const [selectedImages, setSelectedImages] = useState([]);
	const [imageAvailable, setImageAvailable] = useState(false);

	useEffect(() => {
		if (props.route.params) {
			const { patient_abhaid } = props.route.params;
			setPatientAbhaId(patient_abhaid);
		}
	}, [props.route.params]);

	useEffect(() => {
		console.log("Number of images: ", selectedImages.length);
		console.log("Updated selected images:", selectedImages);
	}, [selectedImages]);

	function getDate() {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, "0");
		var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		var yyyy = today.getFullYear();
		today = yyyy + "-" + mm + "-" + dd;
		return today;
	}

	const handleImagePickerPress = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			aspect: [1, 1],
			quality: 1,
			allowsMultipleSelection: true,
			base64: true,
			selectionLimit: 6,
		});

		if (!result.cancelled) {
			const newImage = result.assets.map((asset) => ({
				fileName: asset.fileName,
				uri: asset.uri,
				base64: asset.base64,
			}));

			if (selectedImages.length + newImage.length <= 6) {
				setSelectedImages((prevSelectedImages) => [
					...prevSelectedImages,
					...newImage,
				]);
				setImageAvailable(true);

				// Insert each new image into the database
				newImage.forEach(async (image) => {
					try {
						await dbFunctions.insertImage(
							patientAbhaId,
							image.base64,
							getDate()
						);
					} catch (error) {
						console.error(
							"Error inserting image into database:",
							error
						);
					}
				});
				await AsyncStorage.setItem("ImageAddedStatus", "true");
			} else {
				Alert.alert("Error", "You can't add more than 6 images.", [
					{ text: "OK" },
				]);
			}
		}
	};

	const addImages = async () => {
		navigation.navigate("DoctorSelection", {
			patient_abhaid: patientAbhaId,
		});
	};

	const handleResetImages = async () => {
		setSelectedImages([]);
		setImageAvailable(false);
		console.log("All Images Cleared");
		await AsyncStorage.setItem("ImageAddedStatus", "false");
	};

	function goBackToDashboard() {
		navigation.navigate("PatientDashboard", {
			patient_abhaid: patientAbhaId,
			new_patient: false,
		});
	}

	return (
		<View style={styles.container}>
			<Navbar />
			<WorkerDetails />
			<PageHeading text="Add Images" />
			<View style={styles.buttons}>
				<Pressable
					onPress={goBackToDashboard}
					style={AppStyles.goldBtn}
				>
					<Text style={AppStyles.primaryBtnText}>
						Backt to Patient Dashboard
					</Text>
				</Pressable>
				<Pressable
					onPress={handleImagePickerPress}
					style={AppStyles.primaryBtn}
				>
					<Text style={AppStyles.primaryBtnText}>
						Add Images
					</Text>
				</Pressable>
				<Pressable
					onPress={handleResetImages}
					style={AppStyles.primaryBtn}
				>
					<Text style={AppStyles.primaryBtnText}>
						Reset Images
					</Text>
				</Pressable>
			</View>
			{imageAvailable && (
				<ScrollView style={styles.imageAvailable}>
					<View style={styles.imageGrid}>
						{selectedImages.map((image, index) => (
							<Image
								key={index}
								source={{ uri: image.uri }}
								style={styles.image}
							/>
						))}
					</View>
					<View style={AppStyles.btn}>
						<Pressable
							onPress={addImages}
							style={AppStyles.redBtn}
						>
							<Text style={AppStyles.primaryBtnText}>
								Add Images
							</Text>
						</Pressable>
					</View>
				</ScrollView>
			)}
		</View>
	);
};

export default AddImages;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		marginHorizontal: 20,
	},
	imageAvailable: {
		flexDirection: "column",
		alignSelf: "center",
		margin: "auto",
	},
	imageGrid: {
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		padding: 10,
		margin: "auto",
	},
	image: {
		width: 200,
		height: 200,
		margin: 20,
		borderRadius: 25,
	},
});
