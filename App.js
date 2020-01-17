import React, { Component } from "react";
import Splash from "./src/screens/Splash";
import Phone from './src/screens/Phone';
import Level from './src/screens/Level'
import Extempore from './src/screens/Extempore'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
// const authStack=createSwitchNavigator({
//   Splash:Splash,
//   Phone:Phone,
//   Level:Level
// },
// {
//   initialRouteName:'Splash'
// }
// );
// const AppContainer=createAppContainer(authStack)
export default class App extends Component {
  render() {
    return <Extempore/>;
  }
}



