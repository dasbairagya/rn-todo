import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useEffect, useState} from 'react';
import { Input, Icon, Button } from 'react-native-elements';
import * as Styles from '../styles/Style';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = () => {

    // console.log(navigation);
    navigation.navigate('Todo'); //Navigate to Todo screen
}

  return (
    <>
      <View style={Styles.defaultStyle.container}>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        <View style={styles.container}>
      <Input
        placeholder='Enter your email'
        label='Email'
        leftIcon={{ type: 'material', name: 'email' }}
        value={email}
        onChangeText={(email) => setEmail(email)}
      />

      <Input
        placeholder='Enter your password'
        label='Password'
        leftIcon={{ type: 'material', name: 'lock' }}
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry
      />
      <View>
        <Button title='LOGIN' 
          icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white'
              }}
            iconRight
            iconContainerStyle={{ marginLeft: 10 }}
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={{
              backgroundColor: 'rgba(199, 43, 98, 1)',
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 10,
              width: 200,
              marginVertical:20
            }}
            onPress={SignIn}
        />

        <Button 
        title='CANCEL' 
        icon={{
                name: 'times',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 10,
            width: 200,
            marginVertical:20
          }}
          onPress={() => navigation.navigate('Register') }
        />

      </View>
    </View>
      {/* <Text style={Styles.defaultStyle.text}>Sign In</Text> */}
      {/* Pass the navigation object to the function as a prop as navigation is not available outside the main method */}
      {/* <TouchableOpacity style={Styles.loginStyle.inline}>
      <Button title="Login" style={Styles.loginStyle.btn} onPress={()=>SignIn(navigation)} /> 
      <Button title="Cancel" style={Styles.loginStyle.btn} onPress={()=>{navigation.navigate('Register')}} /> 
      </TouchableOpacity> */}
      </View>
    </>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
},
buttons: {
    borderRadius: 10,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 10,
    width: 200,
    marginVertical:20
  
}

})