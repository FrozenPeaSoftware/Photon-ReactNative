import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from './src/navigation/TabNavigator';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#FFFFFF'
    }}>
        <TabNavigator style={[styles.tabBar]}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#000000',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});
