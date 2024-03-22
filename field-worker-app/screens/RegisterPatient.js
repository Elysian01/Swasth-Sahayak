import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import Button from "../components/misc/Button";
import PageHeading from "../components/headers/PageHeading";
import "../AppStyles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../database/language";

const getLanguage = async () => {
	return await AsyncStorage.getItem("Language");
}

const RegisterPatient = () => {

  const [preferredlangauge, setPreferredLanguage] = useState("English");
	AsyncStorage.getItem("Language").then((lang) => {
		setPreferredLanguage(lang);
	});

  const [gender, setGender] = useState("Male");
  const [Language, setLanguage] = useState("English");
  const [pickerGenderVisible, setPickerGenderVisible] = useState(false)
  const [pickerLanguageVisible, setpickerLanguageVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, newDate) => {
    setShowDatePicker(Platform.OS === "ios");
    if (newDate !== undefined) {
      setSelectedDate(newDate);
      setShowDatePicker(false);
    }
  };

  const showDatePickerAndroid = () => {
    setShowDatePicker(true);
  };
  const handleGenderPress = () => {
    // Open the dropdown here
    setPickerGenderVisible(true);
  };
  const handleGenderSelect = (gender) => {
    setGender(gender);
    setPickerGenderVisible(false);
  };
  const handleLanguagePress = () => {
    // Open the dropdown here
    setpickerLanguageVisible(true);
  };
  const handleLanguageSelect = (Language) => {
    setLanguage(Language);
    setpickerLanguageVisible(false);
  };

  return (
    <ScrollView>
      <Navbar />
      <WorkerDetails />
      <PageHeading text={lang[preferredlangauge]["Patient Registeration"]} />

      <View style={styles.alignForm}>
        <View style={styles.group2}>
          <TextInput style={styles.input} placeholder={lang[preferredlangauge]["First Name"]} placeholderTextColor="#666" />
          <TextInput style={styles.input} placeholder={lang[preferredlangauge]["Last Name"]} placeholderTextColor="#666"/>
        </View>
        <View style={styles.group2}>
          <TouchableOpacity style={styles.input} onPress={handleGenderPress}>
            <Text style={styles.pickerText}>{gender}</Text>
            {pickerGenderVisible && (
              <Picker
                style={styles.picker}
                selectedValue={gender}
                onValueChange={(gender) => handleGenderSelect(gender)}
              >
                <Picker.Item label={lang[preferredlangauge]["Male"]} value={lang[preferredlangauge]["Male"]} />
                <Picker.Item label={lang[preferredlangauge]["Female"]} value={lang[preferredlangauge]["Female"]} />
                <Picker.Item label={lang[preferredlangauge]["Other"]} value={lang[preferredlangauge]["Other"]} />
              </Picker>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.input}
            onPress={showDatePickerAndroid}
          >
            <Text style={styles.text}>{selectedDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>
        <TextInput style={styles.input} placeholder={lang[preferredlangauge]["Abha-ID"]} placeholderTextColor="#666"/>
        <TextInput style={styles.input} placeholder={lang[preferredlangauge]["Phone Number"]} placeholderTextColor="#666"/>
        <TextInput style={styles.input} placeholder={lang[preferredlangauge]["Address"]} placeholderTextColor="#666"/>
        <View style={styles.group2}>
          <TextInput style={styles.input} placeholder={lang[preferredlangauge]["Sector"]} placeholderTextColor="#666"/>
          <TextInput style={styles.input} placeholder={lang[preferredlangauge]["Pincode"]} placeholderTextColor="#666"/>
        </View>
        <TouchableOpacity style={styles.input} onPress={handleLanguagePress}>
            <Text style={styles.pickerText}>{Language}</Text>
            {pickerLanguageVisible && (
              <Picker
                style={styles.picker}
                selectedValue={Language}
                onValueChange={(Language) => handleLanguageSelect(Language)}
              >
                <Picker.Item label="English" value="English" />
                <Picker.Item label="हिंदी" value="हिंदी" />
              </Picker>
            )}
          </TouchableOpacity>

        <View style={styles.btn}>
          <Button type="primary" navigateTo="Followup" text={lang[preferredlangauge]["Submit"]} />
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
  alignForm: {
    justifyContent: "center",
    alignSelf: "center",
    margin: "auto",
    padding: 0,
    width: "85%",
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
    backgroundColor: "#f2f2f2",
    color: "#666",
    padding: 16,
    margin: 8,
    fontSize: 16,
  },
  text: {
    color: "#666",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "auto",
  },
  pickerText:{
    alignSelf:'flex-start',
    fontSize: 16,
    color: "#666",
    backgroundColor: "#f2f2f2",
  },
  btn: {
    alignItems: "center",
  },
});
export default RegisterPatient;
