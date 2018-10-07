import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { TabNavigator } from "./src/navigation/TabNavigator";
import { createStackNavigator } from "react-navigation";
import RegisterScreen from "./src/components/RegisterScreen/RegisterScreen";
import LoginScreen from "./src/components/LoginScreen";
import UploadPhotoScreen from "./src/components/UploadPhotoScreen";
import PhotoOptions from "./src/components/PhotoOptions";
import PhotoScreen from "./src/components/PhotoScreen";
import ProfileScreen from "./src/components/ProfileScreen";
import CustomiseProfileScreen from "./src/components/CustomiseProfileScreen/CustomiseProfileScreen";
import Firebase from "./src/components/Firebase";

import { YellowBox } from 'react-native';
import _ from 'lodash';
import Map from "./src/components/Map/Map";

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

//console.disableYellowBox = true;

global.photoData = [];
global.photoPath = [];


const AppRouter = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null
      }
    },
    CustomiseProfile: {
      screen: CustomiseProfileScreen,
      navigationOptions: {
        header: null
      }
    },
    Tabs: TabNavigator,
    UploadPhoto: {
      screen: UploadPhotoScreen,
      header: null
    },
    PhotoOptions: {
      screen: PhotoOptions,
      header: null
    },
    Photo: {
      screen: PhotoScreen,
      header: null
    },
    Profile: {
      screen: ProfileScreen,
      header: null
    },
    Map: {
      screen: Map,
      header: null
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default class App extends React.Component {

  // static navigationOptions = { title: 'Login', header: { visible:false } };
  componentWillMount() {
    //Firebase.init();
  } 

  render() {
    return (
      <View
        style={{
          flex: 1
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
