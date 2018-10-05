import React, { Component } from "react";
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, Text, KeyboardAvoidingView, Modal } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
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
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324}}>
          <Icon name='md-pin' color='#4ca7ed' size={80}/>
          <Image style={[styles.photo]} source={{uri: global.photoPath[0]}}></Image>
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
    width: 40,
    height: 40,
    borderRadius: 50
  }
 });

export default Map;
