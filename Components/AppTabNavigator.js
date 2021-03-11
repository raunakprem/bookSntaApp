import React from 'react';
import {Image} from 'react-native';
import {createBotomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../Screens/BookDonateScreen'
import BookRequestScreen from '../Screens/BookRequestScreen'

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks :{
        screen:BookDonateScreen,
        navigationOptions:{
           tabBarIcon:<Image />,
           tabBarLabel:'Donate Books ',
           
        }
            },
    BookRequest:{
        screen:BookRequestScreen,
        navigationOptions:{
           tabBarIcon:<Image />,
           tabBarLabel:'Request Books ',
           
        }
            },
    })