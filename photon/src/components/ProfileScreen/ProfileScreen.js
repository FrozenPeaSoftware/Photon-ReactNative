import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import PhotoGrid from "react-native-image-grid";
import { getUserID, getUserInfo } from "../Firebase";

class ProfileScreen extends Component {
  state = { photoPath: [], name: "", username: "", biography: "" };
  userID = getUserID();

  constructor() {
    super();
    this.state = { photoPath: global.photoPath };
    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { photoPath: !previousState.photoPath };
      });
      let userInfo = getUserInfo(this.userID);
      userInfo.then(result => {
        if (result != null) {
          this.updateState(
            result.name,
            result.username,
            result.biography,
            false
          );
        } else {
          this.updateState("", "", "", false);
        }
      });
    }, 1000);

    let userInfo = getUserInfo(this.userID);
    userInfo.then(result => {
      if (result != null) {
        this.updateState(result.name, result.username, result.biography, false);
      } else {
        this.updateState("", "", "", false);
      }
    });
  }

  updateState(name, username, biography, loading) {
    this.setState({
      name,
      username,
      biography,
      loading
    });
  }

  onPressOptions() {
    this.props.navigation.navigate("CustomiseProfile", {
      prevComponent: "customiseProfile"
    });
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.profileHeader}>
          <View style={styles.profileHeaderTop}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.profilePicture}
                source={{
                  uri:
                    "https://instagram.fakl1-2.fna.fbcdn.net/vp/f14a92850c2e674f8964fb85e151a41e/5C242956/t51.2885-19/s150x150/38096749_208075379863871_8613051600635691008_n.jpg"
                }}
              />
            </View>
            <View style={styles.followerContainer}>
              <View style={styles.followerContainerTop}>
                <View style={styles.countContainer}>
                  <Text style={styles.numText}>100</Text>
                  <Text style={styles.text}>Posts</Text>
                </View>
                <View style={styles.countContainer}>
                  <Text style={styles.numText}>589</Text>
                  <Text style={styles.text}>Following</Text>
                </View>
                <View style={styles.countContainer}>
                  <Text style={styles.numText}>677</Text>
                  <Text style={styles.text}>Followers</Text>
                </View>
              </View>
              <View style={styles.followerContainerBot}>
                <TouchableOpacity
                  style={styles.optionsButton}
                  onPress={() => this.onPressOptions()}
                >
                  <Text style={styles.buttonText}>Options</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.profileHeaderBot}>
            <Text style={{ color: "black", fontWeight: "bold" }}>
              {this.state.name}
            </Text>
            <Text>{this.state.biography}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {renderPhotos()}
      </View>
    );
  }
}

function renderPhotos() {
  if (global.photoPath[0] != null) {
    return (
      <PhotoGrid
        data={global.photoPath}
        itemsPerRow={2}
        itemMargin={1}
        itemPaddingHorizontal={5}
        renderHeader={renderHeader}
        renderItem={renderItem}
      />
    );
  }
}

function renderHeader() {
  return <Text />;
}

function renderItem(path, itemSize, itemPaddingHorizontal) {
  return (
    <TouchableOpacity
      style={{
        width: itemSize,
        height: itemSize,
        paddingHorizontal: itemPaddingHorizontal
      }}
      onPress={() => {
        // Do Something
      }}
    >
      <Image resizeMode="cover" style={{ flex: 1 }} source={{ uri: path }} />
    </TouchableOpacity>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white"
    //justifyContent: "space-evenly"
  },
  profileHeader: {
    //backgroundColor: "aliceblue",
    height: "25%"
  },
  profileHeaderTop: {
    display: "flex",
    margin: 15,
    marginBottom: 0,
    height: "55%",
    //backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  imageContainer: {
    height: "100%",
    width: "25%"
    //backgroundColor: "purple"
  },
  followerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "73%",
    height: "100%"
    //backgroundColor: "violet"
  },
  followerContainerTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "50%"
  },
  countContainer: {
    width: "30%"
    //backgroundColor: "blue",
  },
  numText: {
    color: "#313131",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  },
  text: {
    color: "#858585",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center"
  },
  followerContainerBot: {
    height: "35%",
    marginLeft: 10
    //backgroundColor: "blue",
  },
  optionsButton: {
    backgroundColor: "#4ca7ed",
    borderRadius: 100
  },
  buttonText: {
    padding: 7,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
  profileHeaderBot: {
    //backgroundColor: "blue",
    height: "45%",
    paddingTop: 10,
    marginLeft: 15,
    marginRight: 15
  },
  profilePicture: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 100
  },
  divider: {
    backgroundColor: "#4ca7ed",
    height: 2,
    marginLeft: 15,
    marginRight: 15
  }
});
