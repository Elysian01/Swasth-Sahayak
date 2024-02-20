import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PatientRecords from "../components/PatientRecords"; // Import the PatientRecords component
import Footer from "../components/Footer";

const Followup = () => {
  const abhishekName = "Abhishek"; // Replace with actual name
  const randomId = Math.floor(Math.random() * 1000); // Generate random ID

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Hello {abhishekName}</Text>
        <Text>Random ID: {randomId}</Text>
      </View>
      <Text style={styles.text}>Followup Schedule</Text>
      <PatientRecords /> 
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Followup;
