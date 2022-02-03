import React from 'react';
import { View, Image } from 'react-native'
import { CustomInput, CustomButton, CustomHeader, DisplayImage } from './component';
const App = () => {
    return (
        <>
            <View style={{ backgroundColor: "#0586A9" }}>
                {/* <DisplayImage /> */}
                <CustomHeader title='HOME' />
                <View style={{ padding: 10 }}>
                    <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
                        style={{ width: 400, height: 400 }}
                    />
                    <CustomInput label="Enter Name" />
                    <CustomInput label="Enter Father Name" />
                    <CustomButton btnName="Press Me" />
                </View>
            </View>
        </>
    )
}


export default App;

