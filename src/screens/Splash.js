import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../style/color";
export default class Splash extends Component {
  componentDidMount(){
    setTimeout(
        ()=>{
          this.props.navigation.navigate('Phone')
        },
        2*1000
    );
  }
  render() {
    return (
        <View style={styles.welcomeWrapper}>
          <Image
            style={styles.logo}
            source={require("../img/Logo.jpg")}
          />
          <Text style={styles.welcomeText}>
            "Elevating Skills and Empowering People"
          </Text>
        </View>   
    );
  }
}
const styles = StyleSheet.create({
    welcomeWrapper: {
      flex: 1,
      display: "flex",
      marginTop: 30,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      width: 300,
      height: 120,
      marginTop: 50,
      marginBottom: 40
    },
    welcomeText: {
      fontSize: 20,
      color: colors.black,
      marginBottom: 40,
      fontFamily:'lobster'
    }
  });
 
