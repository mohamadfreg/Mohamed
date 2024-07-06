import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
// import { Screen } from 'react-native-screens'
import ScreenNames from './screenNames'
import Home from '../screens/Home'
import Splash from '../screens/Splash'
import Descrption from '../screens/descrption'
import Cart from '../screens/cart'
import State from '../screens/State'

const MainNavigation = () => {
    const Stack = createNativeStackNavigator()
  return (
   <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name={"test"} component={State} /> */}
        <Stack.Screen name={ScreenNames.splash} component={Splash} />
        <Stack.Screen name={ScreenNames.home} component={Home} />
        <Stack.Screen name={ScreenNames.descrption} component={Descrption} />
        <Stack.Screen name={ScreenNames.cart} component={Cart} />
      </Stack.Navigator>
   </NavigationContainer>
      
    
  )
}

export default MainNavigation

const styles = StyleSheet.create({})
