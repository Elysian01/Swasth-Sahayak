import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Dropdown from "../components/inputs/Dropdown";

const LanguageSelection = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.greetings}>
        <Text style={styles.greetingsText1}>Welcome to</Text>
        <Text style={styles.greetingsText2}>Swasth Sahayak</Text>
      </View>
      <Image
        style={styles.image}
        source={require("../assets/images/login-bg.png")}
      ></Image>
      <Text style={styles.subtext}>Please Enter Your Prefered Language</Text>
      <Dropdown />
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.ButtonText}>&#x2192;</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  greetings: {
    marginVertical: 40,
    alignItems: "center",
  },
  greetingsText1: {
    fontSize: 40,
  },
  greetingsText2: {
    color: AppStyles.color.primary,
    fontSize: 50,
  },
  image: {
    height: 400,
  },
  subtext: {
    marginBottom: 10,
    fontSize: 26,
  },
  Button: {
    backgroundColor: AppStyles.color.primary,
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginTop: 20,
    marginBottom: 50,
  },
  ButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "900",
  },
});
