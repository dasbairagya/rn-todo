import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList, ScrollView, Image, Switch } from 'react-native'
import React, { useEffect, useState, useLayoutEffect } from 'react'
import * as Styles from '../styles/Style';
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';

const Todo = ({navigation}) => {

  const [item, setItem] = useState('')
  const [items, setItems] = useState([])
  const [isCheckedItem, setIsCheckedItem] = useState(false);
  const [isSetItemId, setIsSetItemId] = useState('');
  const [toggleEdit, setToggleEdit] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    const newItem = {
      id: Date.now(),
      value: 'React Native',
      check: false
  };
  setItems([...items, newItem]);
//   console.log(items);
  }, []);


  //add item to list
  const addItem = () => {
    // console.log(item);
    if(!item){

        alert('Please enter a value');
    }
    else if(item && isSetItemId){
        //update item
        const updatedItems = items.map((elem)=>{
            if(elem.id === isSetItemId){
                return {...elem, value: item}; //ammend the tergeted item keeping the old data as same with spread operator(e.g. '...elem')
                
            }else{ 
                return elem;
            }
        });
        setItems(updatedItems); //
        setItem([]); //clear input
        setIsSetItemId(null);//clear ItemId
        setToggleEdit(false); //reset flag to false once item is updated
        alert('Item updated successfully');
    }else{
        //to get the unique id for different items
        const newItem = {
            id: Date.now(),
            value: item,
            check: false
        };
        setItems([...items, newItem]);
        setItem('');
        console.log('Item added successfully');
        // alert('Item added successfully');
    }
  }

  const renderEntity = ({item, index}) => {
    return (
      <>
      <View style={Styles.todoStyle.fixToText}>
        <View style={Styles.todoStyle.entityContainer}>
            <Text style={Styles.todoStyle.entityText} >
                {index+1}. {item.value}
            </Text>
        </View>
        <Switch
        style={Styles.todoStyle.switch}
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
     </View>
     </>
    )
  }
  useLayoutEffect( () => {
    navigation.setOptions({

        headerRight: () => (
          <TouchableOpacity style={{ marginRight:20 }} onPress={navigation.navigate('Home')}>
            <AntDesign name="logout" size={24} color="black"/>
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <View style={{marginLeft:10}}>
            <Avatar
              size={54}
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
              title="Bj"
              containerStyle={{ backgroundColor: 'grey' }}
            >
              <Avatar.Accessory size={23} />
            </Avatar>
            {/* <Avatar rounded source={{uri:auth?.currentUser?.photoURL}} /> */}
          </View>
        )
        
    })
  })

  return (
<>
    <View style={Styles.todoStyle.container}>
        <Image
            source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{ width: 100, height: 100 }}
        />
        <Text style={Styles.defaultStyle.text}>My To Do List App</Text>
        <View style={Styles.todoStyle.formContainer}>
            <TextInput
                style={Styles.todoStyle.input}
                placeholder='Add new item'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setItem(text)}
                value={item}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity style={Styles.todoStyle.button} >
                <Text style={Styles.todoStyle.buttonText} onClick={addItem}>Add</Text>
            </TouchableOpacity>
        </View>
 
        { items && (
            <View style={Styles.todoStyle.listContainer}>
                <FlatList
                    data={items}
                    renderItem={renderEntity}
                    keyExtractor={(item) => item.id.toString()}
                    removeClippedSubviews={true}
                />
            </View>

        )}



        {/* <TouchableOpacity  >
            <Button title="Logout" 
            color="rgb(239, 185, 67)" 
            style={Styles.todoStyle.buttonText} 
            onPress={()=>{navigation.navigate('Home')}} 
            />    
        </TouchableOpacity> */}
    </View>
            <Button title='Logout' 
            icon={{
                    name: 'log-out',
                    type: 'font-awesome',
                    size: 15,
                    color: 'white',
                  }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 10,
                width: 120,
                marginVertical:20
              }}
            
            />
            </>
  )
}

export default Todo

const styles = StyleSheet.create({


})