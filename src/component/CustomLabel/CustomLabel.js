import React from 'react';
import { View, Text } from 'react-native';


const CustomLabel = ({label}) => (
  <View style={{padding:10}}>
    <Text style={{fontSize:25,fontWeight:"bold"}}>{label}</Text>
  </View>
);


export default CustomLabel;
