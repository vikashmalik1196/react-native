import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import PropTypes from 'prop-types'




const CustomButton = ({ btnName, onPress,uppercase }) => {
  return (
    <PaperButton mode="contained" uppercase={uppercase} onPress={onPress}
      style={{ margin: 10, backgroundColor: "#1ABC9C", color: "#ffffff" }}
    >
      {btnName}
    </PaperButton>)
}
CustomButton.propTypes = {
  btnName: PropTypes.string.isRequired,
  onPress:PropTypes.func

}
CustomButton.defaultProps={
  uppercase:false

}



export default CustomButton;
