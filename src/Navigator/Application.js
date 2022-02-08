import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './utils';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup,Profile } from '../Container';
import Route from '../Config/Route/Route';

const Stack = createNativeStackNavigator();
const Application = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          {Route.map((item, index) => (
            <Stack.Screen key={index} name={item.name} component={item.component} />
          ))
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
};


export default Application;
