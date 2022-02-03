import React, { useState } from 'react';
import { TextInput as PaperInput} from 'react-native-paper';


const CustomInput = ({label,placeholder}) => {
 const [text,setText] = useState("")
  return (
    <>
      <PaperInput
          mode='flat'
          label={label}
          placeholder={placeholder}
          onChangeText={text => setText(text)}
          style={{backgroundColor:"#0586A9"}}
        />
      
    </>
  );
};

export default CustomInput;
