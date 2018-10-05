import React, { Component } from "react";
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, Text, KeyboardAvoidingView, Modal } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  colors,
  Button
} from "react-native-elements";

import Icon from 'react-native-vector-icons/Ionicons';

import DoubleClick from 'react-native-double-click';

class PhotoScreen extends Component {

  static navigationOptions = {
    headerRight: (
      <TouchableOpacity style={{marginRight: 20}}onPress={this.toggleLikedStatus}>
        <Icon name='md-pin' color='#4ca7ed' size={30}/>
      </TouchableOpacity>
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      location: props.navigation.getParam('location'),
      description: '',
      liked: false };
  }

  toggleLikedStatus = () => {
    this.setState({
      liked: !this.state.liked
    });
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
          {/* <Text style={[styles.headerLocation]}>{location.name}</Text> */}
        </View>
      </View>
      <DoubleClick onClick={this.toggleLikedStatus}>
        <Image style={[styles.photo]} source={{uri: image.path}}/>
      </DoubleClick>
      <View style={[styles.photoFooterContainer]}>
        <View style={[styles.likeAndCommentIconsContainer]}>
          <TouchableOpacity onPress={this.toggleLikedStatus}>
            <Icon style={this.state.liked ? styles.likeIconActive : styles.likeIconInactive} name='md-heart' size={40}/>
          </TouchableOpacity>
          <Text style={[styles.likesAndCommentsCount]}>0</Text>
          <Icon name='ios-chatbubbles' color='#4ca7ed' size={40}/>
          <Text style={[styles.likesAndCommentsCount]}>0</Text>
        </View>
        <Text style={[styles.description]}>{description}</Text>
      </View>
      <View style={[styles.divider]}/>
      <View style={[styles.commentBoxContainer]}>
        <View>
          <FormLabel style={[styles.label]}>Comment</FormLabel>
          <FormInput inputStyle={[styles.formInput]}/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    height: 60
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
  description: {
    fontSize: 14,
    color: '#000000'
  },
  photoFooterContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: 80,
    marginLeft: 20
  },
  likeAndCommentIconsContainer: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center',
    width: 120
  },
  likesAndCommentsCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 'auto',
    marginLeft: 10,
    marginRight: 20
  },
  likeIconActive: {
    color: '#F44336'
  },
  likeIconInactive: {
    color: '#4ca7ed'
  },
  divider: {
    backgroundColor: "#4ca7ed", 
    height: 2
  },
  formInput: {
    backgroundColor: "#ececec",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 20,
    height: 80,
    width: 375,
  },
  label: {
    color: "#4ca7ed"
  },
  buttonContainer: {
    alignItems: "center"
  },
  button: {
    backgroundColor: "#4ca7ed",
    width: 200,
    height: 55,
    borderRadius: 50,
    alignItems: "center",
    padding: 17,
    marginBottom: 20
  },
  buttonText: {
    fontWeight: "bold",
    color: "white"
  },
  commentBoxContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-evenly',
    alignItems: "center"
  }
});

export default PhotoScreen;
