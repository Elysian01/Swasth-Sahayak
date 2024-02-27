import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import CurrentDiagnose from "../components/misc/CurrentDiagnose";
import DiagnoseHistory from "../components/misc/DiagnoseHistory";
import Graph from "../components/misc/Graph";
import Navbar from "../components/headers/Navbar";
import WorkerDetails from "../components/headers/WorkerDetails";

const PatientDashboard = () => {
  const [text, setText] = useState(""); // State to hold the text input value

  return (
    <ScrollView>
      <Navbar />
      <WorkerDetails />
      <CurrentDiagnose />
      <Graph/>
      <DiagnoseHistory />
    </ScrollView>
  );
};

export default PatientDashboard;
