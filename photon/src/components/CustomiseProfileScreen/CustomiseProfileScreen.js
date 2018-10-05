import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator
} from "react-native";
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
      name,
      username,
      biography,
      loading
    });
  }

  render() {
    const prevComponent = this.props.navigation.getParam("prevComponent");
    const navigation = this.props.navigation;

    if (this.state.loading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            backgroundColor: "white"
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
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
            {renderButtonsContainer(prevComponent, this.state, navigation)}
          </View>
        </View>
      );
    }
  }
}

function renderButtonsContainer(prevComponent, state, navigation) {
  if (prevComponent != "register") {
    return (
      <View style={styles.doubleButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => cancel(navigation)}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => saveProfile(state, navigation)}
        >
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.singleButtonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => saveProfile(state, navigation)}
        >
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function saveProfile(state, navigation) {
  updateProfile(
    state.name,
    state.username,
    state.biography
  );
  navigation.navigate("Tabs");
}

function cancel(navigation) {
  navigation.goBack();
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
  singleButtonContainer: {
    alignItems: "center"
    //backgroundColor: "pink"
  },
  doubleButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  button: {
    backgroundColor: "#4ca7ed",
    width: 180,
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
