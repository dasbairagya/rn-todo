import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import * as Styles from '../styles/Style';
import { useNavigation } from '@react-navigation/native';


const SignIn = (navigation) => {

    // console.log(navigation);
    navigation.navigate('Todo'); //Navigate to Todo screen
}

const Login = ({ navigation }) => {

  return (
      <>
      
    <View style={Styles.defaultStyle.container}>
    
    <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
      />
    <Text style={Styles.defaultStyle.text}>Sign In</Text>
    {/* Pass the navigation object to the function as a prop as navigation is not available outside the main method */}
    <Button title="Login" onPress={()=>SignIn(navigation)} /> 
    </View>
    </>
  )
}

export default Login

const styles = StyleSheet.create({})