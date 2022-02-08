import React, { useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { CustomCard, CustomLabel, CustomButton } from '../../component';
import Api from '../../service';

const Profile = () => {

  const [data, getData] = useState([])
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'All', value: '' },
    { label: '13', value: '13' },
    { label: '26', value: '26' },


  ]);

  const handleSubmit = async () => {

  }



  const onChangeValue = async (value) => {
    var data = {
      regId: value,
    };
    // let response = await Api.get('userList.php', data)
    let response = await Api.create('userList.php', data)
    console.log(response)
    if (response.status) {
      getData(response.responseData)
    }
  }


  return (
    <View style={{ padding: 5 }}>
      <CustomLabel label='Users Registered' />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={(value) => onChangeValue(value)}
        style={{ padding: 10 }}
      />

      <CustomCard username="Dummy" email="xyz@stl.com" phone='123' />
      <CustomButton btnName='Find User' onPress={handleSubmit} />
    </View>
  )
};



export default Profile;
