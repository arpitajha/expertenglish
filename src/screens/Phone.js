import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from "react-native";
import colors from "../style/color/index"
import InputField from "../components/InputField"
import NextArrowButton from "../buttons/NextArrowButton"
import firebase from '@react-native-firebase/app'
import database from '@react-native-firebase/database'
export default class Phone extends Component {
    database=firebase.database();
  render() {
    return (
        <View style={styles.scrollViewWrapper}>
        <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>LOGIN</Text>
            <Text></Text><Text></Text>
            <InputField 
              labelText="PHONE NUMBER" 
              labelTextSize={16} 
              labelColor={colors.black} 
              textColor={colors.black} 
              borderBottomColor={colors.black} 
              inputType="number" 
              customStyle={{marginBottom:30}}    
            /><Text></Text><Text></Text>
            <InputField 
              labelText="ACCESS KEY" 
              labelTextSize={16} 
              labelColor={colors.black} 
              textColor={colors.black} 
              borderBottomColor={colors.black} 
              inputType="number" 
              customStyle={{marginBottom:30}}    
            />
          </ScrollView>
       
          <NextArrowButton
          onPress={this.readUserData}
          />
         </View>
        
    );
  }
  readUserData= ()=> {
    database().ref('phone/').on('value', function (snapshot) {
        console.log(snapshot.val())
        console.log('Hello')  
    });
    this.props.navigation.navigate('Level')
}
}
const styles = StyleSheet.create({
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
    justifyContent:'space-evenly'
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex:1
   },
  loginHeader: {
    fontSize: 60,
    color: colors.black,
    fontWeight: "300",
    marginBottom: 40,
    textAlign:'center',
    padding:30,
    
  }
});