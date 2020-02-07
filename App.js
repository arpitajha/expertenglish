import React, { Component } from "react";
import Splash from "./src/screens/Splash";
import Phone from './src/screens/Phone';
import Level from './src/screens/Level'
import Extempore from './src/screens/Extempore'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import Controls from './src/screens/Controls'
import Reading from './src/components/Reading'
const authStack=createSwitchNavigator({
  Phone:Phone,
  Level:Level,
},
);
const appStack=createStackNavigator({
  ActivePassive:Reading
})

const AppCon= createSwitchNavigator(
  {
    Splash:Splash,
    App:appStack,
    Auth:authStack
  },
  {
    initialRouteName:'Splash'
  }
)
const AppContainer=createAppContainer(AppCon)
export default AppContainer