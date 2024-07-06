import { Button, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenNames from '../routes/screenNames'
import { Images } from '../images/images'

const Splash = (props) => {

  const goToHome=()=>{
    props.navigation.navigate(ScreenNames.home)
  }

  return (
    <ImageBackground source={Images.madred()} style={styles.screen}>

      <Pressable style={styles.card} onPress={goToHome}>
      <Text style={styles.welcome}>              welcome to shop </Text>
        
      </Pressable>


        <Text style={styles.welcome}></Text>
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  welcome :{
    fontSize:25,
    color:"#000",
    margin:25 ,
    
  }

})