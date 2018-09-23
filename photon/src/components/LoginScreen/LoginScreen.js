import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";

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
          </View>
          <View style={styles.buttonContainer}>
            {/* <Button title="Log In" buttonStyle={styles.button} /> */}
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Tabs')}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
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
    backgroundColor: "white"
  },
  container: {
    height: "60%",
    justifyContent: "space-evenly"
    //backgroundColor: "magenta",
  },
  imageContainer: {
    height: "25%"
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
    paddingBottom: "7%"
    //backgroundColor: "blue"
  },
  formInput: {
    backgroundColor: "#ececec",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonContainer: {
    alignItems: "center"
    //backgroundColor: "pink"
  },
  button: {
    backgroundColor: "#4ca7ed",
    width: 200,
    height: 55,
    borderRadius: 50,
    alignItems: 'center',
    padding: 17,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white"
  }
});

export default LoginScreen;
