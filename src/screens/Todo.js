import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList, ScrollView, Image, Switch } from 'react-native'
import React, { useEffect, useState, useLayoutEffect } from 'react'
import * as Styles from '../styles/Style';
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';

const Todo = ({navigation}) => {

  const [item, setItem] = useState('')
  const [items, setItems] = useState([])
  const [isChecked, setIsChecked] = useState(false);
  const [isSetItemId, setIsSetItemId] = useState('');
  const [toggleEdit, setToggleEdit] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = (id) => {
    console.log('id=> '+id);
    const updatedItems = items.map((elem)=>{
      if(elem.id === id && elem.isChecked === false){
          console.log('Item checked successfully');
          return {...elem, isChecked: true}; //ammend the tergeted item keeping the old data as same with spread operator(e.g. '...elem')
          
      }else if(elem.id === id && elem.isChecked === true){
          console.log('Item unchecked successfully');
          return {...elem, isChecked: false};
          
      }
      else{ 
          return elem;
      }
  });
  setItems(updatedItems); //
    // setIsEnabled(previousState => !previousState);
  }

  useEffect(() => {
    const newItem = {
      id: Date.now(),
      value: 'React Native',
      isChecked: false
  };
  setItems([...items, newItem]);
  console.log(items);
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
            isChecked: false
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
        onValueChange={()=>toggleSwitch(item.id)}
        value={item.isChecked}
      />
     </View>
     </>
    )
  }

  return (
    <>
    <View style={Styles.todoStyle.container}>
        <Image
            source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{ width: 80, height: 80}}
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

          <Button title='Logout' 
            color="rgb(239, 185, 67)" 
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
                marginBottom: 20,
                
              }}
              onPress={()=>{navigation.replace('Home')}} 
            
          />

    </View>
          
    </>
  )
}

export default Todo

const styles = StyleSheet.create({
  done: {
    textDecorationLine: 'line-through',
    textDecorationColor: '#ccc',
}

})