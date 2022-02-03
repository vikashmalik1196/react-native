import React from 'react';
import { View, Image } from 'react-native'

const DisplayImage = ({ url }) => (
  <View >
    <Image source={{ uri: "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png" }}
      style={{ width: 400, height: 400 }}
    />
  </View>
);


export default DisplayImage;
