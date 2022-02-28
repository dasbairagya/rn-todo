import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Input, Icon, Button } from 'react-native-elements';
import * as Styles from '../styles/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {

  const getData = async () => {
    const data = await AsyncStorage.getItem('user')
    if(data){
        return JSON.parse(data); //string to array
    }else{
        return [];
    }
}
  const [isloading, setIsloading] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(getData());

  useEffect(() => { //tigger wherever isloading state changes
    setTimeout(() => {
      //will check if the user is already login or not here
      setIsloading(false);
    }, 1000);
  }, [isloading]); 

  //loader
  if(isloading){
      return (
        <View style={Styles.defaultStyle.container}>
          <ActivityIndicator size="large" color="#0000ff" />
          </View>
      )
    } 

  //login
  const SignIn = async () => {

    // setIsloading(true);

    console.log(user);

    const data = {
      username: username,
      password: password
    };
    if(username === 'admin' && password === 'admin'){
      ResetInputs()
      try {
        await AsyncStorage.setItem('user', JSON.stringify(data));
        navigation.replace('Todo');
      } catch (e) {
        // saving error
      }

    }else{
      alert('Invalid username or password');
    }
    
}

const ResetInputs = () => {
  setUsername('');
  setPassword('');
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
        <Text style={Styles.defaultStyle.title}>{user.username}</Text>
        <View style={styles.container}>
      <Input
        placeholder='Enter your username'
        label='Username'
        leftIcon={{ type: 'material', name: 'email' }}
        value={username}
        onChangeText={(username) => setUsername(username)}
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
          onPress={ResetInputs}
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