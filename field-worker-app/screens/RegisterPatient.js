import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import Button from "../components/misc/Button";
import "../AppStyles";
const RegisterPatient = () => {
  return (
    <ScrollView>
      <Navbar />
      <WorkerDetails />
      <Text style={styles.div6}>Register User</Text>
      <View style={styles.alignForm}>
        <View style={styles.group2}>
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Last Name" />
        </View>
        <View style={styles.group2}>
          <TextInput style={styles.input} placeholder="Gender" />
          <TextInput style={styles.input} placeholder="Dob" />
        </View>
        <TextInput style={styles.input} placeholder="Abha-ID" />
        <TextInput style={styles.input} placeholder="Phone Number" />
        <TextInput style={styles.input} placeholder="Address" />
        <View style={styles.group2}>
          <TextInput style={styles.input} placeholder="Sector" />
          <TextInput style={styles.input} placeholder="Pincode" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <View style={styles.btn}>
          <Button type="primary" navigateTo="Followup" text="Submit" />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  div2: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 10,
  },
  div3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  div6: {
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 25,
  },
  alignForm: {
    margin: 20,
    padding: 0,
  },
  group2: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: AppStyles.color.primary,
    backgroundColor: "#f0efff",
    color: "#666",
    padding: 16,
    margin: 8,
    fontSize: 16,
  },
  text: {
    color: "#7140fd",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
	btn: {
		alignItems: "center",
	},
});
export default RegisterPatient;
