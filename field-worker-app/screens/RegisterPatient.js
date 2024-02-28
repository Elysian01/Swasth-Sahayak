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
import DateTimePicker from '@react-native-community/datetimepicker';
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";
import Button from "../components/misc/Button";
import PageHeading from "../components/headers/PageHeading";
import "../AppStyles";
const RegisterPatient = () => {
  const [gender, setGender] = useState("male");
  const [pickerVisible, setPickerVisible] = useState(false);
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
    setPickerVisible(true);
  };
  const handleGenderSelect = (gender) => {
    setGender(gender);
    setPickerVisible(false);
  };

  return (
    <ScrollView>
      <Navbar />
      <WorkerDetails />
      <PageHeading text="Patient Registeration" />

      <View style={styles.alignForm}>
        <View style={styles.group2}>
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Last Name" />
        </View>
        <View style={styles.group2}>
          <TouchableOpacity style={styles.input} onPress={handleGenderPress}>
            <Text style={styles.genderText}>{gender}</Text>
            {pickerVisible && (
              <Picker
                style={styles.picker}
                selectedValue={gender}
                onValueChange={(gender) => handleGenderSelect(gender)}
              >
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            )}
          </TouchableOpacity>
          {/* <TextInput style={styles.input} placeholder="D.O.B" /> */}
          <TouchableOpacity
            style={styles.input}
            onPress={showDatePickerAndroid}
          >
            <Text style={styles.datePickerButtonText}>
              {selectedDate.toLocaleDateString()} {/* Display selected date */}
            </Text>

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
        <TextInput style={styles.input} placeholder="Abha-ID" />
        <TextInput style={styles.input} placeholder="Phone Number" />
        <TextInput style={styles.input} placeholder="Address" />
        <View style={styles.group2}>
          <TextInput style={styles.input} placeholder="Sector" />
          <TextInput style={styles.input} placeholder="Pincode" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Preferred Language"
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
