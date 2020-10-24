import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/Screens/HomeScreen";
import CamScreen from './src/Screens/CamScreen';
import SettingsScreen from './src/Screens/SettingsScreen' ;

const navigator = createStackNavigator(
  {
    Home: HomeScreen ,
    Cam : CamScreen , 
    Settings : SettingsScreen ,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);


