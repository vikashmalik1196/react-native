import React, { useState } from "react";
import { View,  StyleSheet,Text } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';



const CustomSelect = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  return(
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    );
}



export default CustomSelect;