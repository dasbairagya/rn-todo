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
  // const [user, setUser] = useState(getData());
  const [username, setUsername] = useState('');
  const [isValidUser, setisValidUser] = useState(true);

  const [password, setPassword] = useState('');
  const [isValidPass, setisValidPass] = useState(true);
  const [error, setError] = useState(false);

  const validateUser = (val) => {
    setUsername(val);
    if(val.trim().length >= 4){
        setisValidUser(true);
    }
    else{
      setisValidUser(false);
    }

  }

  const validatePass = (val) => {
    setPassword(val);
    if(val.trim().length >= 8){
      setisValidPass(true);
    }
    else{
      setisValidPass(false);
    }

  }

  useEffect(() => { //tigger wherever isloading state changes
    setTimeout(() => {
      //will check if the user is already login or not here
      setIsloading(false);
    }, 1000);
  }, [isloading]); 

  const showError = () => { //tigger wherever isloading state changes
    setTimeout(() => {
      //will check if the user is already login or not here
      setError(false);
    }, 3000);
  }; 



  //loader
  if(isloading){
      return (
        <View style={Styles.defaultStyle.container}>
          <ActivityIndicator size="large" color="#0000ff" />
          </View>
      )
  } 

    //clear inputs
  const ResetInputs = () => {
    console.log('reset inputs');
    setUsername('');
    setPassword('');
  }

  //login
  const SignIn = async () => {
    setIsloading(true)
    setTimeout(() => {console.log('Please Wait!')}, 2000);
    setError(false);

    if(username === 'admin' && password === 'PASSWORD'){
      ResetInputs()
      try {
        // await AsyncStorage.setItem('user', JSON.stringify(data));
        
        navigation.replace('Todo');
      } catch (e) {
        // saving error
      }

    }else{
      setError(true);
      showError();
    }

  }



  return (
    <>
      <View style={Styles.defaultStyle.container}>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 120, height: 120 }}
        />
          <View style={styles.container}>
          <Input
            placeholder='Enter your username'
            label='Username'
            value={username}
            leftIcon={{ type: 'material', name: 'email' }}
            onChangeText={(val) => validateUser(val)}
          />
          {isValidUser ? null : <Text style={Styles.loginStyle.errorMsg}>Username must be at least 4 characters</Text>}

          <Input
            placeholder='Enter your password'
            label='Password'
            leftIcon={{ type: 'material', name: 'lock' }}
            value={password}
            onChangeText={(val) => validatePass(val)}
            secureTextEntry
          />
          {isValidPass ? null : <Text style={Styles.loginStyle.errorMsg}>Password nust be 8 caharacters long.</Text>}
          {!error ? null : 
              
                //will check if the user is already login or not here
                <Text style={Styles.loginStyle.errorMsg}>Invalid username and password supply.</Text>
          }
              
          
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

            <Button title='CANCEL' 
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
    </>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: 300,
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