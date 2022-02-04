import React from 'react'
import { TextInput as PaperInput} from 'react-native-paper';

const CustomInput = ({label,placeholder,onChangeText}) => {


  return (
    <>
      <PaperInput
          mode='flat'
          label={label}
          placeholder={placeholder}
          onChangeText={text => onChangeText(text)}
          style={{backgroundColor:"#0586A9"}}
        />
      
    </>
  );
};

export default CustomInput;
