import { Text, View, Button, Image } from 'react-native'
import React from 'react'
import * as Styles from '../styles/Style';

const Create = (navigation) => {
  navigation.navigate('Todo'); //Navigate to Todo screen

}
const Register = ({navigation}) => {
  return (
    <View style={Styles.defaultStyle.container}>
      <Image source={require('../../assets/favicon.png')} 
      style={{ width: 200, height: 200 }}
      />
      <Text style={Styles.defaultStyle.text}>Register</Text>
      <Button
        title="Press me"
        onPress={()=>{Create(navigation)}}
      />
    </View>
  )
}

export default Register
