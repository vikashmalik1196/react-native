import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';



const CustomSelect = ({onChangeText}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Odissa', value: 'odissa' },
    { label: 'Goa', value: 'goa' },
    { label: 'Jharkhand', value: 'jharkhand' },
    { label: 'Bihar', value: 'bihar' }
  ]);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={text => onChangeText(text)}

      style={{padding:10}}
    />
  );
}



export default CustomSelect;