import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  colors,
  Button
} from "react-native-elements";

class PhotoOptions extends Component {
  constructor(props) {
    super(props);
    this.state = { location: '', description: '' };
  }
  render() {
  const image = this.props.navigation.getParam('image');
  return <View style={[styles.main]}>
    <View style={[styles.centerContainer]}>
      <FormLabel>Location</FormLabel>
      <FormInput inputStyle={styles.formInput} onChangeText={(location) => this.setState({location})} value={this.state.location}/>
      <FormLabel>Description</FormLabel>
      <FormInput inputStyle={styles.formInput} onChangeText={(description) => this.setState({description})} value={this.state.description}/>
      <Image style={[styles.imagePreview]} source={{uri: image.path}}/>
      <View style={[styles.buttonsContainer]}>
      <TouchableOpacity style={[styles.button]} onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]} onPress={() => upload(this.props, image, this.state.location, this.state.description)}>
          <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
      </View>
    </View>
  </View>
  }
}

function upload(props, image, location, description) {
  console.log("Uploading...");
  console.log(location + ' ' + description);
  props.navigation.navigate('Photo', {
    image: image,
    location: location,
    description: description
  });
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: 'white'
  },
  centerContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: "#4ca7ed",
    width: '42%',
    margin: 10,
    height: 55,
    borderRadius: 50,
    alignItems: 'center',
    padding: 17,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    marginBottom: 10
  },
  buttonText: {
    fontWeight: "bold",
    color: "white"
  },
  imagePreview: {
    marginTop: 40,
    marginBottom: 40,
    borderRadius: 15,
    width: 375,
    height: 375
  },
  formInput: {
    backgroundColor: "#ececec",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: 375,
  }
});

export default PhotoOptions;
