import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import UploadPhotoScreen from '../components/UploadPhotoScreen';
import ProfileScreen from '../components/ProfileScreen';
import PhotoOptions from '../components/PhotoOptions/PhotoOptions';
import Map from "../components/Map/Map"

const TabNavigator = createBottomTabNavigator({
    UploadPhoto: {
        screen: UploadPhotoScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon name='md-cloud-upload' color={tintColor} size={25}/>
            )
        })
    },
    Search: {
        screen: PhotoOptions,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon name='md-search' color={tintColor} size={25}/>
            )
        })
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon name='md-person' color={tintColor} size={25}/>
            ),
        })
    },
    Options: {
        screen: Map,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon name='md-settings' color={tintColor} size={25}/>
            )
        })
    }
}, {
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeTintColor: '#4ca7ed',
        inactiveTintColor: '#606060',
        style: {
            height: 54,
            backgroundColor: '#FFFFFF',
            elevation: 40
        },
        tabStyle: {}
    }
});

const defaultGetStateForAction = TabNavigator.router.getStateForAction;

export { TabNavigator };