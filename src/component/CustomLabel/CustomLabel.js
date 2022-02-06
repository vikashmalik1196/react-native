import React from 'react';
import { StyleSheet,View, Text, } from 'react-native';


const CustomLabel = ({label}) => (
  <View style={{padding:10}}>
    <Text style={styles.text}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
   fontSize:20,
   fontWeight:"bold",

  }, 
});






export default CustomLabel;
