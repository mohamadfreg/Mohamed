import { ActivityIndicator, Button, ImageBackground, Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenNames from '../routes/screenNames'
import { Images } from '../images/images'
import { live } from '../Api/fetchApi'

const Splash = (props) => {



  const goToHome=()=>{
    props.navigation.navigate(ScreenNames.home)
  }
  
  
const[islive , setlive] = useState(false)

  useEffect(() => {
    console.log("is live");
    live().then((v)=>{
      console.log(v);
        setlive(true)     
      // ToastAndroid.show("live",500)
    })
  }, [])


  return (
    <ImageBackground source={Images.madred()} style={styles.screen}>

      

     {
      islive?
     <Pressable style={styles.card} onPress={goToHome}>
      <Text style={styles.welcome}>            welcome to shop </Text>
        
      </Pressable>
      :
<ActivityIndicator size="large" color={"green"}/>
 }
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