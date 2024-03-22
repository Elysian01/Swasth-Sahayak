// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// import "../../AppStyles";

// const Navbar = () => {
// 	const navigation = useNavigation();

// 	return (
// 		<View style={styles.nav}>
// 			<View style={styles.navLogo}>
// 				<TouchableOpacity
// 					onPress={() => navigation.navigate("Home")}
// 				>
// 					<View style={styles.navHeading}>
// 						<Image
// 							style={styles.logo}
// 							source={require("../../assets/logo.png")}
// 						/>
// 						<Text style={styles.headingText}>
// 							Swasth Sahayak
// 						</Text>
// 					</View>
// 				</TouchableOpacity>
// 			</View>

// 			<View style={styles.navLinks}>
// 				<TouchableOpacity
// 					onPress={() => navigation.navigate("Home")}
// 				>
// 					<Text style={styles.navItem}>Home</Text>
// 				</TouchableOpacity>
// 				<TouchableOpacity
// 					onPress={() => navigation.navigate("RegisterPatient")}
// 				>
// 					<Text style={styles.navItem}>Register</Text>
// 				</TouchableOpacity>
// 				<TouchableOpacity
// 					onPress={() => navigation.navigate("FindPatient")}
// 				>
// 					<Text style={styles.navItem}>Find Patient</Text>
// 				</TouchableOpacity>
// 				<TouchableOpacity
// 					onPress={() => navigation.navigate("Profile")}
// 				>
// 					<Text style={styles.navItem}>Profile</Text>
// 				</TouchableOpacity>
// 			</View>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	nav: {
// 		flexDirection: "row",
// 		paddingHorizontal: 25,
// 		backgroundColor: "#fff",
// 		justifyContent: "space-between",
// 		shadowColor: "#000",
// 		shadowOffset: { width: 0, height: 4 },
// 		shadowOpacity: 0.2,
// 		shadowRadius: 6,
// 		elevation: 5,
// 		marginTop: 5,
// 	},
// 	navLogo: {
// 		flexDirection: "row",
// 		justifyContent: "space-between",
// 		alignItems: "center",
// 		marginVertical: 8,
// 	},
// 	logo: {
// 		maxWidth: 50,
// 		height: 60,
// 		margin: 0,
// 		padding: 0,
// 	},
// 	navHeading: {
// 		flexDirection: "row",
// 		alignItems: "center",
// 	},
// 	headingText: {
// 		color: AppStyles.color.primary,
// 		fontSize: 22,
// 		fontWeight: "bold",
// 		marginLeft: 10,
// 	},
// 	navLinks: {
// 		marginTop: 10,
// 		flexDirection: "row",
// 	},
// 	navItem: {
// 		color: AppStyles.color.primary,
// 		fontSize: 18,
// 		fontWeight: "600",
// 		paddingVertical: 15,
// 		paddingHorizontal: 15,
// 	},
// });

// export default Navbar;

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { lang } from "../../language";
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
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.navHeading}>
            <Image
              style={styles.logo}
              source={require("../../assets/logo.png")}
            />
            <Text style={styles.headingText}>{lang[preferredlangauge]["Swasth Sahayak"]}</Text>
          </View>
        </TouchableOpacity>
      </View>
      {accessTokenExists && (
        <View style={styles.navLinks}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.navItem}>{lang[preferredlangauge]["Home"]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterPatient")}
          >
            <Text style={styles.navItem}>{lang[preferredlangauge]["Register"]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("FindPatient")}>
            <Text style={styles.navItem}>{lang[preferredlangauge]["Find Patient"]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.navItem}>{lang[preferredlangauge]["Profile"]}</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 15,
  },
});

export default Navbar;
