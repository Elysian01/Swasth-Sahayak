import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import Button from "../components/misc/Button";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../language";

const getLanguage = async () => {
  return await AsyncStorage.getItem("Language");
};
const Home = () => {
  const [preferredlangauge, setPreferredLanguage] = useState("English");
  AsyncStorage.getItem("Language").then((lang) => {
    setPreferredLanguage(lang);
  });
  const navigation = useNavigation();

  function downloadData() {
    console.log("Downloading data...");
  }

  return (
    <View>
      <Navbar />
      <WorkerDetails />
      <Text style={styles.downloadText}>
        {lang[preferredlangauge]["Sector Data"]}
        <Text style={styles.downloadStatus}> Not Downloaded</Text>
      </Text>
      <View style={styles.btn}>
        <Pressable onPress={() => navigation.navigate("Followup", {})}>
          <Button
            type="primary"
            onPress={downloadData()}
            text="Download Sector Data"
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  downloadText: {
    fontSize: 22,
    fontWeight: "500",
    color: "black",
    textAlign: "center",
  },
  downloadStatus: {
    color: "red",
  },
  btn: {
    alignItems: "center",
  },
});

export default Home;
