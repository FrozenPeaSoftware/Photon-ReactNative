import React, { Component } from "react";
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  colors,
  Button
} from "react-native-elements";

import Icon from 'react-native-vector-icons/Ionicons';

class PhotoScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { location: props.get, description: '' };
  }
  render() {
    const image = this.props.navigation.getParam('image');
    console.log(image.path);
    const location = this.props.navigation.getParam('location');
    const description = this.props.navigation.getParam('description');
    return <View style={[styles.main]}>
      <View style={[styles.headerContainer]}>
        <TouchableOpacity onPress={() => showProfile(this.props, image)}>
        <Image style={[styles.profilePhoto]} source={{uri: 'https://instagram.fakl1-2.fna.fbcdn.net/vp/f14a92850c2e674f8964fb85e151a41e/5C242956/t51.2885-19/s150x150/38096749_208075379863871_8613051600635691008_n.jpg'}}/>
        </TouchableOpacity>
        <View style={[styles.nameAndLocationContainer]}>
          <Text style={[styles.headerName]}>Leyton Blackler</Text>
          <Text style={[styles.headerLocation]}>{location}</Text>
        </View>
      </View>
      <Image style={[styles.photo]} source={{uri: image.path}}></Image>
      <View style={[styles.photoFooterContainer]}></View>
    </View>
  }
}

function showProfile(props, image) {
  props.navigation.navigate('Profile', {
    image: image
  });
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70
  },
  photo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10
  },
  nameAndLocationContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  headerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000'
  },
  headerLocation: {
    fontSize: 12,
    color: '#000000'
  },
  photoFooterContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: 90,
    backgroundColor: 'green'
  }
});

export default PhotoScreen;
