import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { CustomInput, CustomButton, CustomHeader, DisplayImage } from '../../component';
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
      <View style={{ backgroundColor: "#0586A9" }}>
        <CustomHeader title='HOME' />
        <View style={{ padding: 10 }}>
          <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
            style={{ width: 400, height: 400 }}
          />
          <CustomInput label="Enter Name" onChangeText={value => onChangeText({ name: 'userName', value })} />
          <CustomInput label="Enter Father Name" onChangeText={value => onChangeText({ name: 'Password', value })} />
          <CustomButton btnName="Press Me" onPress={handleToSubmit} />
        </View>
      </View>
    </>
  )

}





export default Login;
