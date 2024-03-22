import React,{useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import Eye from "../../assets/icons/eye.svg";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../../database/language";

const getLanguage = async () => {
	return await AsyncStorage.getItem("Language");
}

const DiagnoseHistory = () => {

  const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>{lang[preferredlangauge]["Diagnose History"]}</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableHeader, styles.header]}>{lang[preferredlangauge]["Date"]}</Text>
          <Text style={[styles.tableHeader, styles.header]}>{lang[preferredlangauge]["Disease"]}</Text>
          <Text style={[styles.tableHeader, styles.header]}>
          {lang[preferredlangauge]["Questionnaire Score"]}
          </Text>
          <Text style={[styles.tableHeader, styles.header]}>{lang[preferredlangauge]["Prescription"]}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableData}>2nd Jan</Text>
          <Text style={styles.tableData}>Malaria</Text>
          <Text style={styles.tableData}>20/30</Text>
          <View style={styles.eyeContainer}>
            <Eye />
          </View>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableData}>2nd Jan</Text>
          <Text style={styles.tableData}>Malaria</Text>
          <Text style={styles.tableData}>20/30</Text>
          <View style={styles.eyeContainer}>
            <Eye />
          </View>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableData}>2nd Jan</Text>
          <Text style={styles.tableData}>Malaria</Text>
          <Text style={styles.tableData}>20/30</Text>
          <View style={styles.eyeContainer}>
            <Eye />
          </View>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableData}>2nd Jan</Text>
          <Text style={styles.tableData}>Malaria</Text>
          <Text style={styles.tableData}>20/30</Text>
          <View style={styles.eyeContainer}>
            <Eye />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:40,
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
  eyeContainer: {
    flex: 1, 
    alignItems: 'center', 
  }
});

export default DiagnoseHistory;
