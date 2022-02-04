import React from 'react'
import { View } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';

const CustomInput = ({ label, placeholder, onChangeText, type }) => {


  return (
    <>
      <View style={{ margin: 8 }}><PaperInput
        mode='flat'
        label={label}
        placeholder={placeholder}
        outlineColor="#ffffff"
        activeOutlinecolor="black"
        onChangeText={text => onChangeText(text)}
        type={type}
        style={{backgroundColor:"#E7E9EB"}}
      /></View>


    </>
  );
};

export default CustomInput;
