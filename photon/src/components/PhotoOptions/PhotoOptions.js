import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  KeyboardAvoidingView,
  FlatList
} from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  colors,
  Button
} from "react-native-elements";

import { getUserID, uploadPhoto } from "../Firebase";

import RNGooglePlaces from "react-native-google-places";

type Props = {};
class PhotoOptions extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      locationItemSelected: false,
      locationQuery: "",
      predictions: [],
      
      photoData: {
        coordinates: {
          latitude: -1,
          longitude: -1,
        },
        description: "",
        locationDescription: "",
        timestamp: "",
        url: "",
        userID: ""
      }
    };
  }

  locationQueryChanged = locationQuery => {
    this.setState({
      locationItemSelected: false,
      locationQuery: locationQuery,
      locationDescription: locationQuery
    });
    RNGooglePlaces.getAutocompletePredictions(this.state.locationQuery)
      .then(places => {
        this.setState({
          predictions: places
        });
      })
      .catch(error => console.log(error.message));
  };

  lookupLocationByID = (id) => {
    RNGooglePlaces.lookUpPlaceByID(id)
    .then((location) => {
      let state = JSON.parse(JSON.stringify(this.state));
      state.locationItemSelected = true;
      state.locationQuery = location.address;
      state.photoData.coordinates = { latitude: location.latitude, longitude: location.longitude };
      state.photoData.locationDescription = location.address;
      state.photoData.timestamp = new Date().toUTCString();
      this.setState(state);
      /* console.log(location); */
    })
    .catch((error) => console.log(error.message));
  }

  locationItemPressed = (location) => {
    this.lookupLocationByID(location.placeID);
  }

  renderSearchResults = () => {
    if (this.state.locationQuery.length <= 3 || this.state.locationItemSelected) {
      return;
    }
    return (
      <View style={styles.locationList}>
        {this.state.predictions.map(prediction => (
          <TouchableOpacity
            onPress={() => this.locationItemPressed(prediction)}
            key={prediction.placeID}
            style={styles.locationListItem}
          >
            <View>
              <Text style={styles.locationListItemText}>
                {prediction.fullText}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  render() {
    let image = this.props.navigation.getParam("image");
    if (image == undefined) {
      image = {
        path:
          "https://img2.cgtrader.com/items/273636/0cd44de4fd/large/winnie-the-pooh-rigged-t-pose-3d-model-low-poly-rigged-max.jpg"
      };
    }
    return (
      <View style={[styles.main]}>
        <View style={[styles.centerContainer]}>
          <FormLabel style={[styles.label]}>Location</FormLabel>
          <View style={styles.locationSearchView}>
            <FormInput
              inputStyle={[styles.formInput]}
              value={this.state.locationQuery}
              onChangeText={this.locationQueryChanged}
            />
            {this.renderSearchResults()}
          </View>
          <FormLabel style={[styles.label]}>Description</FormLabel>
          <FormInput
            inputStyle={[styles.formInput]}
            onChangeText={description => {
              let state = JSON.parse(JSON.stringify(this.state));
              state.photoData.description = description;
              this.setState(state);
            }}
            value={this.state.photoData.description}
          />
          <Image style={[styles.imagePreview]} source={{ uri: image.path }} />
          <View style={[styles.buttonsContainer]}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() =>
                upload(
                  this.state,
                  image
                )
              }
            >
              <Text style={styles.buttonText}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

function upload(state, image) {
  /* console.log("Uploading...");
  console.log(location + " " + description); */
  let newState = JSON.parse(JSON.stringify(state));
  newState.photoData.userID = getUserID();
  uploadPhoto(newState.photoData, image);
  /* props.navigation.navigate("Photo", {
    image: image,
    location: location,
    description: description
  }); */
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "white"
  },
  centerContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white"
  },
  button: {
    backgroundColor: "#4ca7ed",
    width: "42%",
    margin: 10,
    height: 55,
    borderRadius: 50,
    alignItems: "center",
    padding: 17
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginBottom: 10
  },
  buttonText: {
    fontWeight: "bold",
    color: "white"
  },
  imagePreview: {
    marginTop: 30,
    marginBottom: 20,
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
    height: 50
  },
  label: {
    color: "#4ca7ed"
  },
  locationList: {
    zIndex: 1000,
    position: "absolute",
    backgroundColor: "#ececec",
    top: 50,
    borderRadius: 10,
    width: 375,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9
  },
  locationListItem: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 375,
    height: 60
  },
  locationListItemText: {
    fontSize: 16
  },
  locationSearchView: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default PhotoOptions;
