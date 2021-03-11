import React from 'react';
import {CreateDrawerNavigator} from 'react-navigation-drawer'
import SettingScreen from '../Screens/SettingScreen';
import {AppTabNavigator} from './AppTabNavigator'
import CostomSideBarMenu from './costomSideBarMenu';
import CustomSideBarMenu from './costomSideBarMenu'
import MyDonationScreen from '../Screens/MyDonationScreens'
export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    MyDonations:{
        screen:MyDonationScreen
    },
    Setting:{
        Screen:SettingScreen
    }
},
{
    comtentComponent:CustomSideBarMenu
}
,
{initialRouteName:'Home'}
)
