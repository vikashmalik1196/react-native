import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { CustomLabel, CustomInput, CustomButton, CustomSelect } from '../../component';
import ONBOARDING from '../../Config/Constant/Constant'

const Register = ({ navigation }) => {
  const image = { uri: "https://i.ibb.co/KrJBCpJ/Blue-futuristic-networking-technology-vector.jpg" };

  const [text, setText] = useState("")
  const [form, setForm] = useState({});

  const handleSubmit = () => {
    navigation.navigate(ONBOARDING.OTP)
  }
  const onChangeText = ({ name, value }) => {
    setText(value)
    setForm(prevState => {
      return {
        ...prevState, [name]: value
      }
    })
  }


  return (
    <>

      <ImageBackground source={image} style={styles.image} blurRadius={5}>
        <CustomLabel label='Citizen Registration' />
        <View style={{ padding: 25, borderRadius: 10, backgroundColor: "#ffffff" }}>
          <CustomSelect onChangeText={value => onChangeText({ name: 'state', value })} />
          <CustomInput
            label="Preferably your Mail Address"
            onChangeText={value => onChangeText({ name: 'email', value })}
          />
          <CustomInput
            label="Mobile Number"
            onChangeText={value => onChangeText({ name: 'mobile', value })}
          />
          <CustomButton btnName='Register' onPress={handleSubmit} />

        </View>
      </ImageBackground>
    </>
  )
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  }
})

export default Register;
