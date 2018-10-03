import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";


class Spinner extends Component {
  render() {
    return;
    <View style={styles.main}>
      <ActivityIndicator size="small" />
    </View>;
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-evenly"
  },
});

export default Spinner;
