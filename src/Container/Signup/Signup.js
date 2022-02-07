import React, { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { CustomInput, CustomButton, CustomLabel } from '../../component';


const Signup = ({ navigation }) => {
  const uri = { uri: "https://i.ibb.co/gJwwCCr/mha.jpg" };


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

  //making network call
  const registerUser = async () => {
    var data = {
      username: form.username,
      email: form.email,
      phone: form.phone,
      password: form.password

    };

    try {
      let response = await fetch(
        "http://192.168.0.54/Testproject/",
        {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      );
console.log(response)
    }
    catch (errors) {

      alert(errors);
    }
  }





  const handleSubmit = () => {
    registerUser();
    alert("User Registered")
    console.log("@@@name", form.username)
    console.log("@@@name", form.email)
    console.log("@@@name", form.phone)
    console.log("@@@name", form.password)

  }

  return (
    <>
      <ScrollView>
        <View style={{ backgroundColor: "#1ABC9C" }}>
          <CustomLabel label="SIGN UP" />
          <View style={{ backgroundColor: "white", height: "100%", marginTop: 100, marginBottom: 0, borderRadius: 30 }}>
            <View style={{ marginTop: 20 }}>
              <Image source={uri}
                style={{ width: 150, height: 150, marginLeft: "auto", marginRight: "auto" }}
              />
              <CustomLabel label="SIGN UP" />
              <CustomInput
                label="Name"
                onChangeText={value => onChangeText({ name: 'username', value })}
              />
              <CustomInput
                label="Email"
                keyboardType='email-address'
                onChangeText={value => onChangeText({ name: 'email', value })}
              />
              <CustomInput
                label="Phone"
                keyboardType='phone-pad'
                onChangeText={value => onChangeText({ name: 'phone', value })}
              />
              <CustomInput
                label="Password"
                secureTextEntry={true}
                onChangeText={value => onChangeText({ name: 'password', value })}
              />
              <CustomButton btnName="Register" onPress={handleSubmit} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}







export default Signup;
