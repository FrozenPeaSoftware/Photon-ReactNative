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

import RNGooglePlaces from "react-native-google-places";

type Props = {};
class PhotoOptions extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      locationQuery: "",
      predictions: [],

      location: "",
      description: ""
    };
  }

  locationQueryChanged = locationQuery => {
    this.setState({
      locationQuery: locationQuery,
      location: locationQuery
    });
    console.log("changed");
    RNGooglePlaces.getAutocompletePredictions(this.state.locationQuery)
      .then(places => {
        // console.log(places);
        this.setState({ predictions: places });
      })
      .catch(error => console.log(error.message));
  };

  renderSearchResults = () => {
    if (this.state.locationQuery.length <= 3) {
      return;
    }
    return (
      <View style={styles.locationList}>
        {this.state.predictions.map(prediction => (
          <TouchableOpacity
            onPress={() => locationItemPressed(prediction)}
            key={prediction.placeID}
            style={styles.locationListItem}
          >
            <View>
              <Text style={styles.locationListItemText}>
                {prediction.primaryText + ", " + prediction.secondaryText}
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
              value={this.props.locationQuery}
              onChangeText={this.locationQueryChanged}
            />
            {this.renderSearchResults()}
          </View>
          <FormLabel style={[styles.label]}>Description</FormLabel>
          <FormInput
            inputStyle={[styles.formInput]}
            onChangeText={description => this.setState({ description })}
            value={this.state.description}
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
                  this.props,
                  image,
                  this.state.location,
                  this.state.description
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

function locationItemPressed(location) {
  console.log(location);
}

function upload(props, image, location, description) {
  console.log("Uploading...");
  console.log(location + " " + description);
  props.navigation.navigate("Photo", {
    image: image,
    location: location,
    description: description
  });
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
