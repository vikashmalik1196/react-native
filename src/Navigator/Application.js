import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './utils';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup } from '../Container';


const Stack = createNativeStackNavigator();
const Application = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
};


export default Application;
