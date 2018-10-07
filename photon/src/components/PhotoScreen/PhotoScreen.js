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

  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity style={{marginRight: 20}} onPress={() => {
        navigation.navigate("Map", {latitude: navigation.getParam('photoData').coordinates.latitude,longitude: navigation.getParam('photoData').coordinates.longitude})
        }}>
        <Icon name='md-pin' color='#4ca7ed' size={30}/>
      </TouchableOpacity>
    ),
  })

  constructor(props) {
    super(props);
    this.state = {
      photoData: this.props.navigation.getParam('photoData'),
      photoPath: this.props.navigation.getParam('photoPath'),
      liked: false,
      currentComment: '',
      comments: [] };
  }

  toggleLikedStatus = () => {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.liked = !this.state.liked;
    this.setState(newState);
  }

  submitComment = () => {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.comments.push(this.state.currentComment);
    newState.currentComment = '';
    this.setState(newState);
  }

  renderComments = () => {
    console.log(this.state.comments);
    return <View>
      {
        this.state.comments.map(comment => {return <View key={comment} style={styles.commentContainer}><Text style={styles.commentName}>Leyton Blackler </Text><Text style={styles.commentText}>{comment}</Text></View>})
      }
    </View>
  }

  render() {
    return <View style={[styles.main]}>
      <View style={[styles.headerContainer]}>
        <TouchableOpacity onPress={() => showProfile(this.props)}>
          <Image style={[styles.profilePhoto]} source={{uri: 'https://instagram.fakl1-2.fna.fbcdn.net/vp/f14a92850c2e674f8964fb85e151a41e/5C242956/t51.2885-19/s150x150/38096749_208075379863871_8613051600635691008_n.jpg'}}/>
        </TouchableOpacity>
        <View style={[styles.nameAndLocationContainer]}>
          <Text style={[styles.headerName]}>Leyton Blackler</Text>
          <Text style={[styles.headerLocation]}>{this.state.photoData.locationDescription}</Text>
        </View>
      </View>
      <DoubleClick onClick={this.toggleLikedStatus}>
        <Image style={[styles.photo]} source={{uri: this.state.photoPath}}/>
      </DoubleClick>
      <View style={[styles.photoFooterContainer]}>
        <View style={[styles.likeAndCommentIconsContainer]}>
          <TouchableOpacity onPress={this.toggleLikedStatus}>
            <Icon style={this.state.liked ? styles.likeIconActive : styles.likeIconInactive} name='md-heart' size={40}/>
          </TouchableOpacity>
          <Text style={[styles.likesAndCommentsCount]}>{this.state.liked ? 1 : 0}</Text>
          <Icon name='ios-chatbubbles' color='#4ca7ed' size={40}/>
          <Text style={[styles.likesAndCommentsCount]}>{this.state.comments.length}</Text>
        </View>
        <Text style={[styles.description]}>{this.state.photoData.description}</Text>
      </View>
      <View style={[styles.divider]}/>
      {
        this.renderComments()
      }
      <View style={[styles.commentBoxContainer]}>
        <View>
          <FormLabel style={[styles.label]}>Comment</FormLabel>
          <FormInput value={this.state.currentComment} onChangeText={currentComment => {
              let state = JSON.parse(JSON.stringify(this.state));
              state.currentComment = currentComment;
              this.setState(state);
            }} inputStyle={[styles.formInput]}/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.submitComment}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  }
}

function showProfile(props) {
  props.navigation.navigate('Profile');
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
  },
  commentName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000'
  },
  commentText: {
    fontSize: 14,
    color: '#000000'
  },
  commentContainer: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: "center",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  }
});

export default PhotoScreen;
