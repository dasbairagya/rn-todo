import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Styles from '../styles/Style';

const Todo = () => {

  const [item, setItem] = useState('')
  const [items, setItems] = useState([])
  const [isCheckedItem, setIsCheckedItem] = useState(false);
  const [isSetItemId, setIsSetItemId] = useState('');
  const [toggleEdit, setToggleEdit] = useState(false);

  useEffect(() => {
    const newItem = {
      id: Date.now(),
      value: 'React Native',
      check: false
  };
  setItems([...items, newItem]);
  setItems([...items, newItem]);
  setItems([...items, newItem]);
  setItems([...items, newItem]);
  setItems([...items, newItem]);
  console.log(items);
  }, [])


  //add item to list
  const addItem = () => {
    console.log(item);
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
      <ScrollView>
        <View style={Styles.todoStyle.entityContainer}>
            <Text style={Styles.todoStyle.entityText}>
                {index+1}. {item.value}
            </Text>
        </View>
      </ScrollView>
    )
  }


  return (
    <View style={Styles.todoStyle.container}>
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
    
</View>
  )
}

export default Todo

const styles = StyleSheet.create({})