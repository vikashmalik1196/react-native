import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { CustomSelect ,CustomCard} from '../../component';

const Profile = () => (
  <View  style={{padding:5}}>
    <CustomSelect />
    <CustomCard/>
  </View>
);



export default Profile;
