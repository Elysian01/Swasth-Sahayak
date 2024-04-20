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
import { uploadImagesAPI } from "../api/APIs";

import AppStyles from "../AppStyles";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import WorkerDetails from "../components/headers/WorkerDetails";

const AddArtifacts = () => {
	const navigation = useNavigation();

	const [patientAbhaId, setPatientAbhaId] = useState("");
	const [selectedImages, setSelectedImages] = useState([]);
	const [imageAvailable, setImageAvailable] = useState(false);

	useEffect(() => {
		if (props.route.params) {
			const { patientAbhaId } = props.route.params;
			setPatientAbhaId(patientAbhaId);
		}
	}, [props.route.params]);

	useEffect(() => {
		console.log("Number of images: ", selectedImages.length);
		console.log("Updated selected images:", selectedImages);
	}, [selectedImages]);

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
				base64: asset.base64.substring(0, 50),
			}));

			if (selectedImages.length + newImage.length <= 6) {
				setSelectedImages((prevSelectedImages) => [
					...prevSelectedImages,
					...newImage,
				]);
				setImageAvailable(true);
			} else {
				Alert.alert("Error", "You can't add more than 6 images.", [
					{ text: "OK" },
				]);
			}
		}
	};

	const handleResetImages = () => {
		setSelectedImages([]);
		setImageAvailable(false);
		console.log("All Images Cleared");
	};

	function goBackToDashboard() {
		navigation.navigate("PatientDashboard", {
			patient_abhaid: patientAbhaId,
			new_patient: false,
		});
	}

	const addImages = async () => {
		// await uploadImagesAPI(uploadData)
		// 	.then((result) => {
		// 		if (result.status === 200) {
		// 			console.log(result);
		// 			Alert.alert("Success", "Data Successfully Uploaded!!");
		// 		} else if (result.status === 401) {
		// 			console.log(result.status);
		// 			Alert.alert("Error", result.data, []);
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 		Alert.alert("Unable to Upload Data: ", error);
		// 	});

		// Alert.alert("Success", "Data Successfully Uploaded!!");
		console.log("Images Added");
	};

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

export default AddArtifacts;

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
