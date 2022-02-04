import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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
  }

  const handleToSubmit = () => {

    // alert(text)
    // console.log("form@@@@", form.userName)
    navigation.navigate(ONBOARDING.SIGNUP)

  }
  return (
    <>

      <View style={{backgroundColor: "white",height: "100%"}}>
        <View style={{ marginTop: "auto", marginBottom: "auto" }}>
          <Image source={{ uri: 'https://i.ibb.co/gJwwCCr/mha.jpg' }}
            style={{ width: 200, height: 200, marginLeft: "auto", marginRight: "auto" }}
          />
          <CustomLabel label="SIGN IN" />
          <CustomInput label="Email" onChangeText={value => onChangeText({ name: 'Password', value })} />
          <CustomInput label="Password" onChangeText={value => onChangeText({ name: 'Password', value })} />
          <CustomButton btnName="Press Me" onPress={handleToSubmit} />
        </View>
      </View>


    </>

  );
 
}




export default Login;
