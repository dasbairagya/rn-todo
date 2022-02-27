import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from './Login';
import Register from './Register';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//create login and register tab screens
//const Tab = createBottomTabNavigator(); //Normal bottom tabs
const Tab = createMaterialBottomTabNavigator();//Material bottom tabs

const Home = () => {
  return (
    <>
    <Tab.Navigator       
      activeColor="#f0edf6"
      barStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)' }}
      >
      <Tab.Screen 
      name="Login" 
      component={Login} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen 
      name="Register" 
      component={Register} 
      options={{
        tabBarLabel: 'Register',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}/>
    </Tab.Navigator>
    </>
  )
}

export default Home

const styles = StyleSheet.create({

})