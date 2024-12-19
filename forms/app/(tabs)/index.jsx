import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../HomeScreen'
import ProfileScreen from '../ProfileScreen'
import Blank from '../Blank'
import Quiz from '../Quiz'

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <>
    {/* <NavigationContainer> */}
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Blank" component={Blank} />
        <Stack.Screen name="Quiz" component={Quiz} />
        
      </Stack.Navigator>
    {/* </NavigationContainer> */}
    </>
  )
}

export default App

