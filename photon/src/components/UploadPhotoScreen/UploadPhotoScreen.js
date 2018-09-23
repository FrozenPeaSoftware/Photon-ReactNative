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
        <TouchableOpacity style={[styles.button]} onPress={()=> choosePhoto(this.props)}>
          <Text style={styles.buttonText}>Choose Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={()=> takePhoto(this.props)}>
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>
      </View>
    </View>;
  }
}

function choosePhoto(props) {
  console.log("Choosing photo...");
  ImagePicker.openPicker({
    width: 800,
    height: 800,
    cropping: true
  }).then(image => {
    console.log(image);
    props.navigation.navigate('PhotoOptions', {image: image});
  });
}

function takePhoto(props) {
  console.log("Taking photo...");
  ImagePicker.openCamera({
    width: 800,
    height: 800,
    cropping: true
  }).then(image => {
    console.log(image);
    props.navigation.navigate('PhotoOptions', {image: image});
  });
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: 'white'
  },
  centerContainer: {
    height: '55%',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#4ca7ed",
    width: 200,
    height: 55,
    borderRadius: 50,
    alignItems: 'center',
    padding: 17,
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: 'red'
  },
  buttonText: {
    fontWeight: "bold",
    color: "white"
  }
});

export default UploadPhotoScreen;
