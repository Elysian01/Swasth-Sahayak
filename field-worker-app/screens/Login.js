import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lang } from "../database/language";
import AppStyles from "../AppStyles";
const Login = () => {
  const navigation = useNavigation();
  const [preferredLanguage, setPreferredLanguage] = useState("English");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("Language").then((lang) => {
      setPreferredLanguage(lang);
    });
  }, []);

  useEffect(() => {
    handleBiometricAuth();
  }, []);

  const handleBiometricAuth = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
    if (!isBiometricAvailable) {
      return Alert.alert(
        "Biometric not available",
        "Please enter your password"
      );
    }

    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      return Alert.alert(
        "Biometric Record not found",
        "Please Login with password"
      );
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometrics",
      cancelLabel: "Cancel",
      disableDeviceFallback: true,
    });

    if (biometricAuth.success) {
      navigation.navigate("Home");
    }

    console.log({ isBiometricAvailable });
    console.log({ savedBiometrics });
    console.log({ biometricAuth });
  };

  const emailChangeHandler = (email) => {
    setEmail(email);
  };

  const passwordChangeHandler = (password) => {
    setPassword(password);
  };

  const handleLogin = () => {
    // Your login logic here
    // For example:
    // if (email !== "" && password !== "") {
    //   loginAPI({
    //     username: email,
    //     password: password,
    //   })
    //   .then((result) => {
    //     if (result.status === 200) {
    //       console.log(result);
    //       AsyncStorage.setItem("AccessToken", result.data.jwtToken);
    //       navigation.navigate("Home");
    //     } else if (result.status === 401) {
    //       console.log(result.status);
    //       Alert.alert("Error", result.data);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     Alert.alert("Error", error);
    //   });
    // } else {
    //   Alert.alert("Invalid Email Format", "Please Enter Valid Email");
    // }

    // Simulating successful login
    const fieldWorkerId = "10597";
    const fieldWorkerName = "Jass Sadana";
    AsyncStorage.setItem("FieldWorkerId", fieldWorkerId);
    AsyncStorage.setItem("FieldWorkerName", fieldWorkerName);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <View style={styles.loginContainer}>
          <View style={styles.greetings}>
            <Text style={styles.greetingsText1}>
              {lang[preferredLanguage]["Welcome to"]}
            </Text>
            <Text style={styles.greetingsText2}>
              {lang[preferredLanguage]["Swasth Sahayak"]}
            </Text>
          </View>
          <Image
            style={styles.image}
            source={require("../assets/images/login-bg.png")}
          />
          <Text style={styles.loginHeading}>
            {lang[preferredLanguage]["login"]}
          </Text>
          <View>
            <Text style={styles.subtext}>
              {lang[preferredLanguage]["Please Enter Below Details"]}
            </Text>
          </View>
          {/* Input fields for email and password */}
          {/* InputField component can be used here */}
          <Pressable
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <View style={styles.forgotPasswordDiv}>
              <Text style={styles.forgotPassword}>
                {lang[preferredLanguage]["Forgot Password"]}
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={handleLogin}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>
              {lang[preferredLanguage]["login"]}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  greetings: {
    marginVertical: 40,
    alignItems: "center",
  },
  greetingsText1: {
    fontSize: 40,
  },
  greetingsText2: {
    fontSize: 50,
  },
  image: {
    height: 400,
  },
  loginHeading: {
    fontSize: 30,
    marginBottom: 10,
  },
  subtext: {
    marginBottom: 10,
    fontSize: 18,
  },
  forgotPasswordDiv: {
    marginLeft: 350,
    marginTop: 5,
  },
  forgotPassword: {
    fontSize: 16,
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: AppStyles.color.primary,
		borderRadius: 7,
		paddingVertical: 10,
		paddingHorizontal: 50,
		marginTop: 20,
		marginBottom: 50,
  },
  loginButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
});

export default Login;
