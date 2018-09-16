import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  colors,
  Button
} from "react-native-elements";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.logo}
              source={require("../../../res/logo.png")}
            />
          </View>
          <View style={styles.formContainer}>
            <FormLabel>Email</FormLabel>
            <FormInput inputStyle={styles.formInput} />
            <FormLabel>Password</FormLabel>
            <FormInput inputStyle={styles.formInput} />
            <View style={styles.buttonContainer}>
              <Button title="Log In" buttonStyle={styles.button} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  imageContainer: {
    //width: "100%",
    height: "30%",
    //backgroundColor: "aliceblue"
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain"
  },
  formContainer: {
    justifyContent: "space-between",
    //backgroundColor: "blue"
  },
  formInput: {
    backgroundColor: "#ececec",
    borderRadius: 10
  },
  buttonContainer: {
    alignItems: "center",
    //backgroundColor: "pink"
  },
  button: {
    backgroundColor: "#4ca7ed",
    width: 200,
    height: 55,
    borderRadius: 50
  }
});

export default LoginScreen;
