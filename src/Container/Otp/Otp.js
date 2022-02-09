import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Caption, Title, Headline, Paragraph } from 'react-native-paper';
import { CustomOtp, CustomLabel, CustomButton } from '../../component'
import ONBOARDING from '../../Config/Constant/Constant'

const Otp = ({ navigation }) => {

  // Timer 
  const [counter, setCounter] = useState(30);
  const [resend, setResend] = useState("");

  const handleResend = () => {
    setCounter(30)
    setResend("")
  }

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (timer == 0) {
      setCounter("")
      setResend("Resend")
    }
    return () => clearInterval(timer);
  }, [counter]);




  const image = { uri: "https://i.ibb.co/KrJBCpJ/Blue-futuristic-networking-technology-vector.jpg" };
  return (
    <ImageBackground source={image} style={styles.image} blurRadius={5}>
      <View style={{ marginTop: "auto", marginBottom: "auto", padding: 10 }}>
        <CustomLabel label='Have You Received a Verification Code ?' />
        <Paragraph style={{ padding: 10, color: "#ffffff", fontWeight: "bold" }}>
          We are automatically detectinga SMS sent to your mobile number ***8646
        </Paragraph>
        <CustomOtp pinCount={6} />
        <Title >Resending Otp in <Headline style={{ fontWeight: "bold", color: "green" }}>{counter}</Headline>
        </Title>
        <Title style={{ fontSize: 15, color: "yellow" }} onPress={handleResend}  >{resend}</Title>
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
