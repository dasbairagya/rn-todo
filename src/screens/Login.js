import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Styles from '../styles/Style';


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
      <TouchableOpacity style={Styles.loginStyle.inline}>
      <Button title="Login" style={Styles.loginStyle.btn} onPress={()=>SignIn(navigation)} /> 
      <Button title="Cancel" style={Styles.loginStyle.btn} onPress={()=>{navigation.navigate('Register')}} /> 
      </TouchableOpacity>
      </View>
    </>
  )
}

export default Login

const styles = StyleSheet.create({})