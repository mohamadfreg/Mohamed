import { Button, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native'
import React, { useState } from 'react'

const State = () => {
    const [arr , setArr]=useState([])
  return (
    <View>
      <Button title='+' onPress={()=>{
        arr.push({
            name:"mohmad",
            age:"20"
        })
        setArr((v)=>[...v])
        console.log(arr);
      }}/>
       <Button title='-' onPress={()=>{
        arr.pop()
        setArr((v)=>[...v])
        console.log(arr);
      }}/>
      {
        arr.map((items,index)=>
            <View style={styles.box}>
                <Text> {items.name} </Text>
                <Text> {items.age} </Text>
            </View>

        )
      }
      
    </View>
  )
}

export default State

const styles = StyleSheet.create({
    box:{
        backgroundColor:"green",
        width:60,
        height:60,
        margin:5,
        
    }
})