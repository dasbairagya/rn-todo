import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Input, Button } from 'react-native-elements';
import * as Styles from '../styles/Style';

const Register = ({navigation}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const register = () =>{ 
  }
  return (
    <View style={Styles.defaultStyle.container}>
      <Image source={require('../../assets/favicon.png')} 
      style={{ width: 200, height: 200 }}
      />
      <ScrollView>
          <View style={styles.container}>
            <Input
              placeholder='Enter your name'
              label='Name'
              leftIcon={{ type: 'material', name: 'rowing' }}
              value={name}
              onChangeText={(name) => setName(name)}
            />
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
            <Input
              placeholder='Enter your image url'
              label='Profile Picture'
              leftIcon={{ type: 'material', name: 'face' }}
              value={imageUrl}
              onChangeText={(imageUrl) => setImageUrl(imageUrl)}
            />
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
          </ScrollView>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
  },
  button: {
      marginTop: 10,
      color: '#fff',
      width: 200,
  }
})