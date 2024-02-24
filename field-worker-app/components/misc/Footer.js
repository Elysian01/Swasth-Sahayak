import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}></View>
      <Text style={styles.mainTitle}>Free Visits On Sector 12</Text>
      <TouchableOpacity style={styles.findPatientButton}>
        <Text style={styles.findPatientButtonText}>Find Patient</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  mainContainer: {
    backgroundColor: "#000",
    width: 745,
    maxWidth: "100%",
    height: 1,
  },
  mainTitle: {
    color: "#000",
    textAlign: "center",
    marginTop: 48,
    whiteSpace: "nowrap",
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Playfair Display",
  },
  findPatientButton: {
    borderWidth: 0,
    borderRadius: 9,
    backgroundColor: AppStyles.color.primary,
    marginTop: 37,
    width: 369,
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 22,
    paddingHorizontal: 60,
  },
  findPatientButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Playfair Display",
  },
});

export default Footer;
