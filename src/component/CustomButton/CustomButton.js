import React from 'react';
import { Button as PaperButton } from 'react-native-paper';

const CustomButton = ({ btnName, onPress }) => {
  return (
    <PaperButton mode="contained" onPress={onPress}
      style={{ margin: 10, backgroundColor: "#1ABC9C", color: "#ffffff" }}
    >
      {btnName}
    </PaperButton>)
}
export default CustomButton;
