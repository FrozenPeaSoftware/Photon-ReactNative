import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
//import firebase from 'firebase';

import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  colors,
  Button
} from "react-native-elements";

class LoginScreen extends Component {
  state = { email: "", password: "", error: "", loading: false };

/*   onLoginPress() {
    this.setState({ error: "", loading: true });

    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: "", loading: false });
      })
      .catch(() => {
        //Login was not successful, let's create a new account
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({ error: "", loading: false });
          })
          .catch(() => {
            this.setState({ error: "Authentication failed.", loading: false });
          });
      });
  } */

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
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Tabs")}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={styles.text}>Don't have an account yet?</Text>
          </TouchableOpacity>
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
  text: {
    textAlign: "center"
    //selectionColor: "blue"
  },
  buttonContainer: {
    alignItems: "center"
    //paddingBottom: "5%"
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

export default LoginScreen;
