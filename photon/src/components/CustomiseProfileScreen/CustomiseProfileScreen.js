import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  colors,
  Button
} from "react-native-elements";
import { updateProfile, getUserID, getUserInfo } from "../Firebase";

class CustomiseProfileScreen extends Component {
  state = { name: "", username: "", biography: "", loading: true };
  imageSource = "";
  userID = getUserID();
  unsubscribe = null;

  constructor() {
    super();
    let userInfo = getUserInfo(this.userID);
    userInfo.then(result => {
      if (result != null) {
        this.updateState(result.name, result.username, result.biography, false);
      } else {
        this.updateState("", "", "", false);
      }
    });
  }

  updateState(name, username, biography, loading) {
    this.setState({ 
      name, username, biography, loading
    }); 
  }

  saveProfile() {
    updateProfile(
      this.userID,
      this.state.name,
      this.state.username,
      this.state.biography
    );
    //this.props.navigation.navigate("Tabs");
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={{flex: 1, justifyContent: "space-evenly", backgroundColor: "white"}}>
          <ActivityIndicator size="large"></ActivityIndicator>
        </View>
      )
    } else {

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
            <FormLabel>Name</FormLabel>
            <FormInput
              inputStyle={styles.formInput}
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
            <FormLabel>Username</FormLabel>
            <FormInput
              inputStyle={styles.formInput}
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            />
            <FormLabel>Biography</FormLabel>
            <FormInput
              inputStyle={styles.formInput}
              value={this.state.biography}
              multiline={true}
              numberOfLines={3}
              onChangeText={biography => this.setState({ biography })}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.saveProfile()}
            >
              <Text style={styles.buttonText}>Save Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
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

export default CustomiseProfileScreen;
