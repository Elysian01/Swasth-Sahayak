import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Navbar from "../components/headers/Navbar";
import Button from "../components/misc/Button";
import PageHeading from "../components/headers/PageHeading";
const Profile = () => {
	return (
		<View>
			<Navbar />
			<PageHeading text="Profile" />
			<Image
				source={require("../assets/images/doctor-page-profile-photo.png")}
				style={styles.doctorImage}
			/>
			<Text style={styles.doctorName}>Aakash Bhardwaj</Text>
			<Text style={styles.qualification}>Neurosurgeon</Text>
			<View style={styles.buttonArrangement}>
				<View style={styles.btn}>
					<Button
						type="primary"
						navigateTo="ResetPassword"
						text="Reset Password"
					/>
				</View>
				<View style={styles.btn}>
					<Button
						type="primary"
						navigateTo="Login"
						text="Logout"
					/>
				</View>
			</View>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	profileName: {
		textAlign: "center",
		paddingTop: 11,
		paddingBottom: 30,
		lineHeight: 22,
		marginTop: 31,
		flex: 1,
		alignSelf: "stretch",
	},
	doctorImage: {
		alignSelf: "center",
		aspectRatio: 1,
		width: 250,
		height: 250,
	},
	doctorName: {
		textAlign: "center",
		marginTop: 32,
		fontSize: 36,
	},
	qualification: {
		textAlign: "center",
		marginTop: 12,
		fontSize: 22,
	},
	btn: {
		alignSelf: "center",
	},
});
