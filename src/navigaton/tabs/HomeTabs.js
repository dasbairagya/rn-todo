import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //simple bottom tabs
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons'; //simple vector icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from '../../screens/Login';
import Register from '../../screens/Register';

//create login and register tab screens
//const Tab = createBottomTabNavigator(); //Normal bottom tabs
// const TopTab = createMaterialTopTabNavigator(); //Material top tabs
const BottomTab = createMaterialBottomTabNavigator();//Material bottom tabs
//@Note: both top and bottom tabs cann't be created at the same tabcontainer @todo: fix this    

const HomeTabs = () => {
  return (
<>
    {/* <TopTab.Navigator>
    <TopTab.Screen name="Home" component={Login} />
    <TopTab.Screen name="Settings" component={Register} />
    </TopTab.Navigator> */}


    <BottomTab.Navigator       
      activeColor="#f0edf6"
      
      barStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)' }}
      >
      <BottomTab.Screen 
      name="Login" 
      component={Login} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      />
      <BottomTab.Screen 
      name="Register" 
      component={Register} 
      options={{
        tabBarLabel: 'Register',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}/>
    </BottomTab.Navigator>
    </>
  )
  
}

export default HomeTabs

const styles = StyleSheet.create({})