import React from 'react'
import { View } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';
import PropTypes from 'prop-types'


const CustomInput = (
  { label, placeholder, onChangeText, disabled, multiline,
     keyboardType, secureTextEntry, value }) => {
  return (
  
      <View style={{ margin: 8 }}>
          <PaperInput
            mode='flat'
            label={label}
            placeholder={placeholder}
            disabled={disabled}
            multiline={multiline}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            value={value}
            outlineColor="#ffffff"
            activeOutlinecolor="black"
            onChangeText={text => onChangeText(text)}
            style={{ backgroundColor: "#E7E9EB" }}
          />
      </View>
  )
}
CustomInput.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  multiline: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
}

CustomInput.defaultProps = {
  disabled: false,
  multiline: false,
  keyboardType: 'default',
  secureTextEntry: false,
}


export default CustomInput;
