import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PatientRecords from "../components/misc/PatientRecords"; // Import the PatientRecords component
import Footer from "../components/misc/Footer";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";


const Followup = () => {
 

  return (
    <View style={styles.container}>
      <Navbar />
      <WorkerDetails />
      <Text style={styles.text}>Followup Schedule</Text>
      <PatientRecords /> 
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding:20,
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
