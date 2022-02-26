import { Text, View, Button, Image } from 'react-native'
import React from 'react'
import * as Styles from '../styles/Style';

const Create = () => {
  console.log('Register');

}
const Register = () => {
  return (
    <View style={Styles.defaultStyle.container}>
      <Image source={require('../../assets/favicon.png')} 
      style={{ width: 200, height: 200 }}
      />
      <Text style={Styles.defaultStyle.text}>Register</Text>
      <Button
        title="Press me"
        onPress={Create}
      />
    </View>
  )
}

export default Register
