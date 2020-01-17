import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, View} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"
import colors from "../style/color/index"
import TrackPlayer from 'react-native-track-player'

export default class Controls extends Component{
  constructor(){
    super()
    this.state={
      AudioStatus:true
    }
  }
  componentDidMount(){
    TrackPlayer.setupPlayer();
    TrackPlayer.updateOptions({
      stopWithApp:true,
      capabilities:[
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE
      ]
    })
  }


  render(){
    return(
            <View style={styles.Wrapper}>  
              <TouchableOpacity onPress={()=>this.playAudio()}>
                {
                  this.state.AudioStatus ?
                  <Icon
              name="play"
              color={colors.black}
              size={32}
              style={styles.icon}
              />:<Icon
              name="pause"
              color={colors.black}
              size={32}
              style={styles.icon}/>
                }
              </TouchableOpacity>
              </View>
                   
    );
  } 
  playAudio()
  {
      if(this.state.AudioStatus){
          this.setState({
              AudioStatus: false
          });
          TrackPlayer.reset()
          TrackPlayer.add(data)
          
          TrackPlayer.play()
      }else{
          this.setState({
              AudioStatus: true
          });
          TrackPlayer.pause()
      }
  }
}

const styles=StyleSheet.create({
  Wrapper:{
    flex:1,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginTop: 200
  },
  icon: {
    marginRight: -2,
    marginTop: -2
  }
});

const data=[
  {
    "id":"101",
    "url":'https://storage.googleapis.com/expertenglish-c9d27.appspot.com/A%20well%20educated%20mind%20vs%20a%20well%20formed%20mind%20Dr.%20Shashi%20Tharoor%20at%20TEDxGateway%202013.mp3',
    
  }
]