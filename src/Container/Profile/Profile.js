import React, { useState ,useEffect} from "react";
import { View, Text, FlatList } from "react-native";
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

  const getUserData = async(value)=>{
    
    var data = {
      regId: value,
    };
    // let response = await Api.get('userList.php', data)
    let response = await Api.create('userList.php', data)
    if (response.status) {
      getData(response.responseData)
    }
  }

  const onChangeValue = async (value) => {
    getUserData(value)
  }

  const renderItem = ({ item, index }) => {
    return (
      <CustomCard key={index} username={"Name: " + item.user_name} email={"Email: " + item.email} phone={"Phone: " + item.phone} />
    )
  }

  useEffect(() => {
    getUserData('')
  },[]);


  return (
    // <ScrollView style={{ padding: 10 }}>
    <>
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

      {/* {data.map((item, index) => (
          <CustomCard key={index} username={"Name: " + item.user_name} email={"Email: " + item.email} phone={"Phone: " + item.phone} />
        ))} */}

      <FlatList
        data={data}

        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </>
  )
};



export default Profile;
