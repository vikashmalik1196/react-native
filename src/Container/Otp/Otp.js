import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomOtp, CustomLabel } from '../../component'


const Otp = () => {
  return (
    <View style={{marginTop:"auto",marginBottom:"auto",padding:10}}>
      <CustomLabel label='Have You Received a Verification Code ?' />
      <Text style={{padding:10}}>
        we are automatically detectinga SMS sent to your mobile number ***8646
      </Text>
      <CustomOtp pinCount={4} />
    </View>
  )
}

export default Otp;
