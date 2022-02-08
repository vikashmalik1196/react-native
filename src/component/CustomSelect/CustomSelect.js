import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';



const CustomSelect = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' }
  ]);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={(value) => {
        console.log("@@value ",value);
      }}

      style={{ padding: 10 }}
    />
  );
}



export default CustomSelect;