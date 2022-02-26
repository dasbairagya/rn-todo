import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stacks from './Stacks';

const Tab = createBottomTabNavigator();

export default function Nav() {
    return (
        <NavigationContainer>
            <Stacks/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})