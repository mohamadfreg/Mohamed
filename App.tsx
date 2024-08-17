import { StyleSheet, View } from 'react-native'
import React from 'react'
import MainNavigation from './src/routes/nav'
import AppProvider from './store/appProrider'

const App = () => {
  return (
    < AppProvider>
      <View style={styles.container}>
        <MainNavigation />
      </View>
    </AppProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


 
