import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/Ionicons';

import ImagePicker from 'react-native-image-crop-picker';

class UploadPhotoScreen extends Component {
  render() {
    return <View style={[styles.main]}>
      <View style={[styles.centerContainer]}>
        <Icon name='md-cloud-upload' color='#4ca7ed' size={100}/>
        <TouchableOpacity title="CHOOSE PHOTO" textStyle={[styles.buttonText]} buttonStyle={[styles.button]} onPress={this.choosePhoto}/>
        <TouchableOpacity title="TAKE PHOTO" textStyle={[styles.buttonText]} buttonStyle={[styles.button]}/>
      </View>
    </View>;
  }
}

function choosePhoto() {
  console.log("choosing photo");
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  centerContainer: {
    height: '55%',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  button: {
    backgroundColor: "#4ca7ed",
    width: 250,
    height: 70,
    borderRadius: 50,
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: 'red'
  },
  buttonText: {
    fontSize: 16
  }
});

export default UploadPhotoScreen;
