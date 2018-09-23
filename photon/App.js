import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { TabNavigator } from "./src/navigation/TabNavigator";
import { createStackNavigator } from "react-navigation";
import RegisterScreen from "./src/components/RegisterScreen/RegisterScreen";
import LoginScreen from "./src/components/LoginScreen";

//type Props = {};

const AppRouter = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    Tabs: TabNavigator
  },
  {
    initialRouteName: "Login"
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          //backgroundColor: "#FFFFFF"
        }}
      >
        {/* <TabNavigator style={[styles.tabBar]}/> */}
        <AppRouter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#000000",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});
