import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const CurrentDiagnose = () => {
  const [text, setText] = useState(""); // State to hold the text input value

  return (
    <View style={styles.container}>
      <View style={styles.div2}></View>
      <Text style={styles.div3}>Current Diagnose</Text>
      <View style={styles.alignView}>
        <View style={styles.div4}>
          <Image source={require("../assets/icons/Doctor.png")} style={styles.img} />
          <View style={styles.div5}>
            <Text style={styles.title}>Dr. Aakash</Text>
            <Text style={styles.description}>added a comment on Abhishek’s Followup</Text>
          </View>
        </View>
        <TextInput
          style={styles.div6}
          placeholder="Enter text"
          multiline={true} // Enable multiline
          numberOfLines={undefined} // Allow dynamic growth
          value={text}
          onChangeText={(value) => setText(value)}
        />
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Proceed to Diagnosis</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 19,
    flexDirection: "column",
    alignItems: "center",
    fontWeight: "400",
    paddingHorizontal: 20,
  },
  div2: {
    backgroundColor: "#000",
    height: 2,
    width: "100%",
  },
  div3: {
    textAlign: "center",
    marginTop: 22,
    fontSize: 26,
    fontFamily: "Playfair Display",
    fontWeight: "600",
  },
  alignView: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 22,
    width: "100%",
  },
  div4: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
    fontSize: 18,
    color: "#334155",
    lineHeight: 20,
    marginTop: 18,
    marginLeft: 44,
  },
  img: {
    width: 48,
    height: 48,
  },
  div5: {
    alignSelf: "flex-end",
  },
  title: {
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "600",
  },
  description: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "400",
  },
  div6: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#f5f5f5",
    borderRadius: 50,
    marginTop: 22,
    minHeight: 50,
    maxHeight: 300, // Set a maximum height for the input
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20, // Reduce vertical padding for better appearance
    textAlignVertical: 'top', // Align text to the top
  },
  submitButton: {
    backgroundColor: "#7140fd",
    borderRadius: 8,
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 33,
  },
  submitButtonText: {
    color: "#fff",
    fontFamily: "Playfair Display",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default CurrentDiagnose;
