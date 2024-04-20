import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ScrollView, Pressable } from "react-native-web";
import AppStyles from "../AppStyles";

const AddArtifacts = () => {
	const [image, setImage] = useState("");

	const handleImagePickerPress = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};
	return (
		<ScrollView automaticallyAdjustKeyboardInsets={true}>
			<Text>AddArtifacts</Text>
			{image && <Image source={{ uri: image }} style={styles.image} />}
			<View style={styles.buttons}>
				<Pressable onPress={handleImagePickerPress}>
					<Text style={AppStyles.primaryBtn}>Open Picker</Text>
				</Pressable>
				<Pressable onPress={() => setImage("")}>
					<Text style={AppStyles.primaryBtn}>Reset Image</Text>
				</Pressable>
			</View>
		</ScrollView>
	);
};

export default AddArtifacts;

const styles = StyleSheet.create({
	image: {
		width: "500px",
	},
	buttons: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignSelf: "center",
	},
});
