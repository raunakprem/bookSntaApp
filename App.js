import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator}from 'react-navigation'
import WelcomeScreen from './Screens/WelcomeScreens';
import {AppTabNavigator} from './Components/AppTabNavigator'
import {AppDrawerNavigator} from './Components/AppDrawerNavigator'

export default function App() {
  return (
  <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator ({
  WelcomeScreen:WelcomeScreen,
  Drawer:{screen:AppDrawerNavigator}
})
const AppContainer = createAppContainer(switchNavigator)



