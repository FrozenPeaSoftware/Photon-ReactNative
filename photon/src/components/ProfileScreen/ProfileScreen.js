import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.profileHeader}>
          <View style={styles.profileHeaderTop}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.profilePicture}
                source={require("../../../res/default.png")}
              />
            </View>
            <View style={styles.followerContainer}>
              <View style={styles.followerContainerTop}>
                <View style={styles.countContainer}>
                  <Text style={styles.numText}>100</Text>
                  <Text style={styles.text}>Posts</Text>
                </View>
                <View style={styles.countContainer}>
                  <Text style={styles.numText}>589</Text>
                  <Text style={styles.text}>Following</Text>
                </View>
                <View style={styles.countContainer}>
                  <Text style={styles.numText}>677</Text>
                  <Text style={styles.text}>Followers</Text>
                </View>
              </View>
              <View style={styles.followerContainerBot}>
                <TouchableOpacity style={styles.optionsButton}>
                  <Text style={styles.buttonText}>Options</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white"
    //justifyContent: "space-evenly"
  },
  profileHeader: {
    //backgroundColor: "aliceblue",
    height: "30%"
  },
  profileHeaderTop: {
    display: "flex",
    margin: 15,
    height: "55%",
    //backgroundColor: "pink",
    flexDirection: "row"
  },
  imageContainer: {
    height: "100%",
    width: "27%",
    //backgroundColor: "purple"
  },
  followerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "73%",
    height: "100%",
    //backgroundColor: "violet"
  },
  followerContainerTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "50%"
  },
  countContainer: {
    width: "30%",
    //backgroundColor: "blue",
  },
  numText: {
    color: "#313131",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  },
  text: {
    color: "#858585",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center"
  },
  followerContainerBot: {
    height: "35%",
    marginLeft: 10,
    //backgroundColor: "blue",
  },
  optionsButton: {
    backgroundColor: "#4ca7ed",
    borderRadius: 100
  },
  buttonText: {
    padding: 7,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
  profilePicture: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 100
  }
});
