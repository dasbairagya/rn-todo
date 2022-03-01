import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Input, Button } from 'react-native-elements';
import * as Styles from '../styles/Style';

const Register = ({navigation}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isValidName, setisValidName] = useState(true);
  const [isValidEmail, setisValidEmail] = useState(true);
  const [isValidPass, setisValidPass] = useState(true);
  const [isValidImage, setisValidImage] = useState(true);
  const [error, setError] = useState(false);

const setUserName = (val) => {
    setName(val);
    if(val.trim().length >= 4){
        setisValidName(true);
    }
    else{
      setisValidName(false);
    }
  }
const setUserEmail = (val) => {
  setEmail(val);
    if(val.trim().length >= 4){
      setisValidEmail(true);
    }
    else{
      setisValidEmail(false);
    }
  }
const setUserPassword = (val) => {
  setPassword(val);
    if(val.trim().length >= 8){
      setisValidPass(true);
    }
    else{
      setisValidPass(false);
    }
  }
const setUserImageUrl = (val) => {
  setImageUrl(val);
    if(val.trim().length >= 8){
      setisValidImage(true);
    }
    else{
      setisValidImage(false);
    }
  }

  const showError = () => { //tigger wherever isloading state changes
    setTimeout(() => {
      //will check if the user is already login or not here
      setError(false);
    }, 3000);
  }; 


  const register = () =>{ 
    if(name && isValidName && isValidEmail && isValidPass && isValidImage && !error){
      navigation.replace('Todo');
    }
    else{
      setError(true);
      showError();
    }




  }
  return (
    <View style={Styles.defaultStyle.container}>
      <Image source={require('../../assets/favicon.png')} 
      style={{ width: 80, height: 80, marginTop: 20 }} />
      {!error ? null : <Text style={Styles.loginStyle.errorMsg}>Something went wrong!</Text>}
      <ScrollView>
          <View style={styles.container}>
            <Input
              placeholder='Enter your name'
              label='Name'
              leftIcon={{ type: 'material', name: 'rowing' }}
              value={name}
              onChangeText={(name) => setUserName(name)}
            />
            {isValidName ? null : <Text style={Styles.loginStyle.errorMsg}>Username must be at least 4 characters</Text>}
            <Input
              placeholder='Enter your email'
              label='Email'
              leftIcon={{ type: 'material', name: 'email' }}
              value={email}
              onChangeText={(email) => setUserEmail(email)}
            />
            {isValidEmail ? null : <Text style={Styles.loginStyle.errorMsg}>Email must be a valid one</Text>}
            <Input
              placeholder='Enter your password'
              label='Password'
              leftIcon={{ type: 'material', name: 'lock' }}
              value={password}
              onChangeText={(password) => setUserPassword(password)}
              secureTextEntry
            />
            {isValidPass ? null : <Text style={Styles.loginStyle.errorMsg}>Password must be at least 8 characters</Text>}
            <Input
              placeholder='Enter your image url'
              label='Profile Picture'
              leftIcon={{ type: 'material', name: 'face' }}
              value={imageUrl}
              onChangeText={(imageUrl) => setUserImageUrl(imageUrl)}
            />
            {isValidImage ? null : <Text style={Styles.loginStyle.errorMsg}>Url must be a valid one</Text>}
            </View>
          </ScrollView>
            <TouchableOpacity>
              <Button 
              title='REGISTER' 
              icon={{
                      name: 'user',
                      type: 'font-awesome',
                      size: 15,
                      color: 'white',
                    }}
              buttonStyle={{
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 10,
                    width: 200,
                    marginVertical:20
                  }}
              onPress={register}
              />
            </TouchableOpacity>

          
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      width: 300,
  },
  button: {
      marginTop: 10,
      color: '#fff',
      width: 200,
  }
})