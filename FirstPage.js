import * as React from 'react';
import { useState , useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';


function User({name , city}) {
  return(
    <Text>
      Name:{name}
      {"\n"}
      City:{city}
      {"\n"}
    </Text>
  )
}

const API_EDPOINT = 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8'

const FirstPage = () => {

const[user , setUser] = useState([]);

  useEffect(()=>{
   fetch(API_EDPOINT)
   .then(res => res.json())
   .then((data) => {
     setUser(data);
   })
  } , []);

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'left' }}>
      {user.map(user => (
      <User 
      key={user.name}
      name={user.name}
      city={user.city}
      ></User>
      ))}
    </View>
  );
};




export default FirstPage;