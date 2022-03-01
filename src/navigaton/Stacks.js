import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../screens/Home';
import Todo from '../screens/Todo';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
      <>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
            options={{
            title: 'Home',
            headerStyle: {
                backgroundColor: 'rgba(199, 43, 98, 1)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
            }}
        />
        <Stack.Screen name="Todo" component={Todo} 
            options={{
                title: 'Todo',
                headerStyle: {
                backgroundColor: 'rgba(255, 224, 0, 60)',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                marginLeft: 50
                }
            }}
        />
    </Stack.Navigator>
    </>
  )
}

export default Stacks

const styles = StyleSheet.create({})