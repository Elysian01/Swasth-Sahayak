import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import "../AppStyles";

const Navbar = () => {
	const navigation = useNavigation();
	const [showNavLinks, setShowNavLinks] = useState(false);

	const toggleNavLinks = () => {
		setShowNavLinks(!showNavLinks);
	};

	return (
		<View style={styles.nav}>
			<View style={styles.navLogo}>
				<TouchableOpacity
					onPress={() => navigation.navigate("DoctorDashboard")}
				>
					<View style={styles.navHeading}>
						<Image
							style={styles.logo}
							source={require("../assets/logo.png")}
						/>
						<Text style={styles.headingText}>
							Swasth Sahayak
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.hamburger}
					onPress={toggleNavLinks}
				>
					<Text style={styles.hamburgerIcon}>☰</Text>
				</TouchableOpacity>
			</View>
			{showNavLinks && (
				<View style={styles.navLinks}>
					{/* <TouchableOpacity
						onPress={() =>
							navigation.navigate("DoctorDashboard")
						}
					>
						<Text style={styles.navItem}>Home</Text>
					</TouchableOpacity> */}
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("SearchPatient")
						}
					>
						<Text style={styles.navItem}>Register</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("DoctorChat")}
					>
						<Text style={styles.navItem}>Patient Login</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Profile")}
					>
						<Text style={styles.navItem}>Profile</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	nav: {
		flexDirection: "column",
		paddingHorizontal: "10%",
		backgroundColor: "#fff",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 6,
		elevation: 5,
		marginTop: 5,
	},
	navLogo: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 8,
	},
	logo: {
		maxWidth: 50,
		height: 60,
		margin: 0,
		padding: 0,
	},
	navHeading: {
		flexDirection: "row",
		alignItems: "center",
	},
	headingText: {
		color: AppStyles.color.primary,
		fontSize: 22,
		fontWeight: "bold",
		marginLeft: 10,
	},
	hamburger: {
		marginRight: 10,
	},
	hamburgerIcon: {
		fontSize: 24,
	},
	navLinks: {
		marginTop: 10,
	},
	navItem: {
		color: AppStyles.color.primary,
		fontSize: 18,
		fontWeight: 900,
		paddingVertical: 15,
		paddingHorizontal: 10,
	},
});

export default Navbar;
