import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { lang } from "../../database/language";
import "../../AppStyles";

const Navbar = () => {
	const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

	const navigation = useNavigation();
	const [accessTokenExists, setAccessTokenExists] = useState(false);

	useEffect(() => {
		const checkAccessToken = async () => {
			try {
				const token = await AsyncStorage.getItem("AccessToken");
				setAccessTokenExists(token !== null);
			} catch (error) {
				console.error("Error checking access token:", error);
			}
		};

		checkAccessToken();
	}, []);

	return (
		<View style={styles.nav}>
			<View style={styles.navLogo}>
				<Pressable onPress={() => navigation.navigate("Home")}>
					<View style={styles.navHeading}>
						<Image
							style={styles.logo}
							source={require("../../assets/logo.png")}
						/>
						<Text style={styles.headingText}>
							{lang[preferredlangauge]["Swasth Sahayak"]}
						</Text>
					</View>
				</Pressable>
			</View>
			{/* 
			<View style={styles.navLinks}>
				<Pressable onPress={() => navigation.navigate("Home")}>
					<Text style={styles.navItem}>
						{lang[preferredlangauge]["Home"]}
					</Text>
				</Pressable>
				<Pressable
					onPress={() => navigation.navigate("RegisterPatient")}
				>
					<Text style={styles.navItem}>
						{lang[preferredlangauge]["Register"]}
					</Text>
				</Pressable>
				<Pressable
					onPress={() => navigation.navigate("FindPatient")}
				>
					<Text style={styles.navItem}>
						{lang[preferredlangauge]["Find Patient"]}
					</Text>
				</Pressable>
				<Pressable onPress={() => navigation.navigate("Profile")}>
					<Text style={styles.navItem}>
						{lang[preferredlangauge]["Profile"]}
					</Text>
				</Pressable>
			</View> */}

			{accessTokenExists && (
				<View style={styles.navLinks}>
					<Pressable onPress={() => navigation.navigate("Home")}>
						<Text style={styles.navItem}>
							{lang[preferredlangauge]["Home"]}
						</Text>
					</Pressable>
					<Pressable
						onPress={() =>
							navigation.navigate("RegisterPatient")
						}
					>
						<Text style={styles.navItem}>
							{lang[preferredlangauge]["Register"]}
						</Text>
					</Pressable>
					<Pressable
						onPress={() => navigation.navigate("FindPatient")}
					>
						<Text style={styles.navItem}>
							{lang[preferredlangauge]["Find Patient"]}
						</Text>
					</Pressable>
					<Pressable
						onPress={() => navigation.navigate("Profile")}
					>
						<Text style={styles.navItem}>
							{lang[preferredlangauge]["Profile"]}
						</Text>
					</Pressable>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	nav: {
		flexDirection: "row",
		paddingHorizontal: 25,
		backgroundColor: "#fff",
		justifyContent: "space-between",
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
	navLinks: {
		marginTop: 10,
		flexDirection: "row",
	},
	navItem: {
		color: AppStyles.color.primary,
		fontSize: 18,
		fontWeight: "600",
		paddingVertical: 15,
		paddingHorizontal: 12,
	},
});

export default Navbar;
