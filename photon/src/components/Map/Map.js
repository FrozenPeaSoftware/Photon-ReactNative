import React, { Component } from "react";
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, Text, KeyboardAvoidingView, Modal } from "react-native";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

class Map extends Component {
  render() {
    return <View style={styles.container}>
      <MapView style={styles.map} initialRegion = {{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}}>
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324}}/>
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
 });

export default Map;