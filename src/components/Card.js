import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ( props) => {
  return (
    <View style={styles.IDview}>
        <View style={styles.item}>
          <View style={styles.img}>

          </View>
          <View style={styles.info}>
            <Text style={styles.txt}>{'name : ' + props.name}</Text>
            <Text style={styles.txt}>B.D:2009.7.8</Text>

          </View>
        </View>
        <Text style={styles.txt}>my first ui</Text>
      </View>
  )
}

export default Card

const styles = StyleSheet.create({
   
  IDview: {
    borderWidth: 1,
    width: '90%',
    height: '30%',
    alignItems: 'center', 

    margin:10
  }, 
  item: {
   borderWidth: 1,
    width: '90%',
    height: '40%',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  img: {
    borderWidth: 1,
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 30

  },
  info: {
    borderWidth:2,
    width: 200,
    height: 100,
    marginLeft: 20,
    justifyContent: 'center'

  },
  txt:{
    fontSize:29,
    marginTop:20,

  }})