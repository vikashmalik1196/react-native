import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { CustomInput, CustomButton, CustomLabel } from '../../component';
import ONBOARDING from '../../Config/Constant/Constant'

const Login = ({ navigation }) => {
  const [text, setText] = useState("")
  const [form, setForm] = useState({});

  const onChangeText = ({ name, value }) => {
    setText(value)
    setForm(prevState => {
      return {
        ...prevState, [name]: value
      }
    })
    console.log(form)
  }

  const handleToSubmit = () => {
    navigation.navigate(ONBOARDING.SIGNUP)
  }
  const uri = { uri: 'https://i.ibb.co/gJwwCCr/mha.jpg' };
  return (

    <View style={{ backgroundColor: "#1ABC9C" }}>
      <View style={styles.subcontainer}>
        <View style={{ marginTop: 20 }}>
          <Image source={uri}style={styles.image}
          />
          <CustomLabel label="SIGN IN" />

          <CustomInput
            label="Email"
            keyboardType='email-address'
            onChangeText={value => onChangeText({ name: 'Password', value })}
          />
          <CustomInput
            label="Password"
            secureTextEntry={true}
            onChangeText={value => onChangeText({ name: 'Password', value })}
          />

          <CustomLabel label="Forget Password?" />
          <CustomButton btnName="Press Me" onPress={handleToSubmit} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subcontainer: {
    backgroundColor: "white",
    height: "100%",
    marginTop: 150,
    borderRadius: 30
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: "auto",
    marginRight: "auto"
  }
});






export default Login;
