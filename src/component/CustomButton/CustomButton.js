import React from 'react';
import { View } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import PropTypes from 'prop-types'




const CustomButton = ({ btnName, onPress,uppercase }) => {
  return (
    <View style={{margin:10}}>
    <PaperButton mode="contained" uppercase={uppercase} onPress={onPress}
      style={{height:45,backgroundColor: "#1ABC9C", color: "#ffffff" }}
    >
      {btnName}
    </PaperButton>
    </View>)

}
CustomButton.propTypes = {
  btnName: PropTypes.string.isRequired,
  onPress:PropTypes.func

}
CustomButton.defaultProps={
  uppercase:false

}



export default CustomButton;
