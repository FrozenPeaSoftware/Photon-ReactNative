import React, { Component } from "react";
import { registerWithEmail } from "../Firebase";

import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  colors,
  Button
} from "react-native-elements";

class RegisterScreen extends Component {
  state = { email: "", password: "", error: "", loading: false };

  onPressRegister() {
    const { email, password } = this.state;

    registerWithEmail(email, password)
      .then(() => {
        this.setState({ error: "", email: "", password: "", loading: false });
        this.props.navigation.navigate("CustomiseProfile");
      })
      .catch(() => {
        this.setState({ error: "An error occurred", loading: false });
      });
  }

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
          {/* <Text style={styles.title}>Register</Text> */}
          <View style={styles.formContainer}>
            <FormLabel>Email</FormLabel>
            <FormInput
              inputStyle={styles.formInput}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <FormLabel>Password</FormLabel>
            <FormInput
              inputStyle={styles.formInput}
              autoCorrect={false}
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            <FormLabel>Confirm Password</FormLabel>
            <FormInput
              inputStyle={styles.formInput}
              autoCorrect={false}
              secureTextEntry
            />
            <Text style={styles.errorMessage}>{this.state.error}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onPressRegister()}
            >
              <Text style={styles.buttonText}>Register</Text>
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
    height: "20%"
    //backgroundColor: "aliceblue"
  },
  title: {
    textAlign: "center",
    fontSize: 40
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
  errorMessage: {
    textAlign: "center",
    color: "red"
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
    alignItems: "center",
    padding: 17
  },
  buttonText: {
    fontWeight: "bold",
    color: "white"
  }
});

export default RegisterScreen;
