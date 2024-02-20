import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  const abhishekName = "Abhishek"; // Replace with actual name
  const randomId = Math.floor(Math.random() * 1000); // Generate random ID

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Hello {abhishekName}</Text>
        <Text>Random ID: {randomId}</Text>
      </View>
      <Text style={styles.text}>Sector Data: Not Downloaded</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Followup")} // Navigate to "Followup" screen
      >
        <Text style={styles.buttonText}>Download Sector Data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: 40,
  },
  header: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 40,
  },
  text: {
    margin: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#40B5AD",
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 50,
    maxWidth: 500,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default HomeScreen;
