import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { CustomOtp, CustomLabel } from '../../component'


const Otp = () => {

  // Timer 
  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
      const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
  }, [counter]);





  const image = { uri: "https://i.ibb.co/KrJBCpJ/Blue-futuristic-networking-technology-vector.jpg" };
  return (
    <ImageBackground source={image} style={styles.image} blurRadius={5}>
      <View style={{ marginTop: "auto", marginBottom: "auto", padding: 10 }}>
        <CustomLabel label='Have You Received a Verification Code ?' />
        <Text style={{ padding: 10,color:"#ffffff",fontWeight:"bold" }}>
          we are automatically detectinga SMS sent to your mobile number ***8646
        </Text>
        <CustomOtp pinCount={6} />
       <Text>Resending Otp in <Text style={{fontSize:15,fontWeight:"bold",color:"green"}}>{counter}</Text> </Text> 
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  }
})

export default Otp;
