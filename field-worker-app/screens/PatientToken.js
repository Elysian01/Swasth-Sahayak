import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Navbar from "../components/Navbar";
import { useNavigation } from '@react-navigation/native';
const VerifyPatient = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Navbar/> */}
      <Text style={styles.header}>A doctor is a person who heals, while a nurse is a person who cares</Text>
      <View style={styles.mainContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>Hello, Abhishek Gupta</Text>
          <Text style={styles.id}>ID: 430176</Text>
        </View>
        <Text style={styles.patientTokenLabel}>Enter Patient Token</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.patientTokenInput}
            placeholder="Enter Patient Token"
            placeholderTextColor="#ccc"
            // Add any additional props or functionality as needed
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={()=>{navigation.navigate('PatientDashboard')}}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:30,
  },
  header: {
    color: "#7140fd",
    textAlign: "center",
    fontFamily: "Poppins",
    fontWeight: "600",
    maxWidth: "100%",
  },
  mainContainer: {
    flexDirection: "column",
    marginTop: 29,
    paddingHorizontal: 20,
    fontSize: 20,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 27,
    fontSize: 18,
    color: "#000",
    textAlign: "left",
  },
  name: {
    fontFamily: "Playfair Display",
    fontWeight: "700",
    textAlign: "left",
    flexGrow: 1,
    flexBasis: "auto",
  },
  id: {
    fontFamily: "Playfair Display",
    fontWeight: "600",
    textAlign: "left",
    marginTop: 0,
  },
  patientTokenLabel: {
    justifyContent: "center",
    color: "#000",
    textAlign: "center",
    marginTop: 20,
    fontFamily: "Playfair Display",
    fontWeight: "600",
    fontSize: 24,
  },
  inputContainer: {
    alignSelf:"center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#7140fd",
    backgroundColor: "#f0efff",
    marginTop: 10,
    width: "70%",
    padding: 16,
  },
  patientTokenInput: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Playfair Display",
    fontWeight: "400",
  },
  submitButton: {
    alignSelf:"center",
    cursor: "pointer",
    backgroundColor: "#7140fd",
    borderRadius: 8,
    textAlign: "center",
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontFamily: "Playfair Display",
    fontWeight: "700",
  },
});

export default VerifyPatient;
