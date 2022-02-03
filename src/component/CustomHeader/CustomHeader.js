import React from 'react';
import { View, Text } from 'react-native';


const CustomHeader = ({title}) => {
  return (
    <View>
    <Text style={{ fontSize:20,padding:15,backgroundColor:"#1ABC9C" ,color:"#ffffff"}}>{title}</Text>
  </View>)
}




export default CustomHeader;
