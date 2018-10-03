import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { loginWithEmail } from "../Firebase";

import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  colors,
  Button
} from "react-native-elements";

class LoginScreen extends Component {
  state = { email: "", password: "", error: "", loading: false };

  onPressLogin() {
    this.setState({ error: "", loading: true });

    const { email, password } = this.state;

    loginWithEmail(email, password).then(() => {
        this.setState({ error: "", loading: false });
        this.props.navigation.navigate("Tabs");
      })
      .catch(() => {
        this.setState({ error: "Incorrect email or password", loading: false });
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
            <Text style={styles.errorMessage}>{this.state.error}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onPressLogin()}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={styles.registerText}>Don't have an account yet?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Tabs")}
          >
            <Text style={styles.registerText}>Test button for you, Leyton</Text>
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
  errorMessage: {
    textAlign: "center",
    color: "red"
  },
  registerText: {
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
