import React, { Component } from "react";
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, Text, KeyboardAvoidingView, Modal } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

class Map extends Component {
  render() {
    console.log('path: ' + global.photoPath[global.photoPath.length - 1]);
    const latitude = this.props.navigation.getParam("latitude");
    const longitude = this.props.navigation.getParam("longitude");
    return <View style={styles.container}>
      <MapView style={styles.map} mapType="hybrid" initialRegion = {{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009}}>
        <Marker coordinate={{ latitude: latitude, longitude: longitude}}>
          <Icon name='md-pin' color='#4ca7ed' size={80}/>
          {/* <Image style={[styles.photo]} onLoad={() => this.forceUpdate()} source={{uri: global.photoPath[global.photoPath.length - 1]}}></Image> */}
        </Marker>
      </MapView>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  photo: {
    width: 60,
    height: 60,
    zIndex: 1000
  }
 });

export default Map;
