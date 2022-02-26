import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login';
import Register from './Register';
import Ionicons from 'react-native-vector-icons/Ionicons';

//create login and register tab screens
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <>
    <Tab.Navigator style={styles.tab}>
      <Tab.Screen name="Sign-In" component={Login} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'red',
    height: '100%',
  }
})