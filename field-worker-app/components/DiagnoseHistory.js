import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DiagnoseHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>Diagnose History</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableHeader, styles.header]}>Date</Text>
          <Text style={[styles.tableHeader, styles.header]}>Disease</Text>
          <Text style={[styles.tableHeader, styles.header]}>
            Questionnaire Score
          </Text>
          <Text style={[styles.tableHeader, styles.header]}>Prescription</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableData}>2nd Jan</Text>
          <Text style={styles.tableData}>Malaria</Text>
          <Text style={styles.tableData}>20/30</Text>
          <Text style={styles.tableData}>View</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableData}>2nd Jan</Text>
          <Text style={styles.tableData}>Malaria</Text>
          <Text style={styles.tableData}>20/30</Text>
          <Text style={styles.tableData}>View</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableData}>2nd Jan</Text>
          <Text style={styles.tableData}>Malaria</Text>
          <Text style={styles.tableData}>20/30</Text>
          <Text style={styles.tableData}>View</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableData}>2nd Jan</Text>
          <Text style={styles.tableData}>Malaria</Text>
          <Text style={styles.tableData}>20/30</Text>
          <Text style={styles.tableData}>View</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeader: {
    textAlign: "center",
    marginTop: 44,
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "Playfair Display",
  },
  table: {
    width: "100%",
    padding: 20,
  },
  tableRow: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  tableHeader: {
    padding: 8,
    textAlign: "center",
    flex: 1,
  },
  header: {
    fontWeight: "bold",
  },
  tableData: {
    padding: 8,
    textAlign: "center",
    flex: 1,
  },
});

export default DiagnoseHistory;
