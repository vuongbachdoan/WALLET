import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text } from 'react-native';
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { Register } from '../screens/Register';
import { Wellcome1 } from '../screens/Wellcome1';
import { Wellcome2 } from '../screens/Wellcome2';
import { Wellcome3 } from '../screens/Wellcome3';
import { Wellcome4 } from '../screens/Wellcome4';
import { Wellcome5 } from '../screens/Wellcome5';
import { ImportFromSeed } from '../screens/ImportFromSeed';

const Stack = createNativeStackNavigator();

export const BottomBar = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#080A0C',
        },
        headerTintColor: '#FFF'
      }}
    >
      <Stack.Screen
        name="Wellcome1"
        component={Wellcome1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wellcome2"
        component={Wellcome2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wellcome3"
        component={Wellcome3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wellcome4"
        component={Wellcome4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wellcome5"
        component={Wellcome5}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />

      <Stack.Screen
        name="Import From Seed"
        component={ImportFromSeed}
      />
    </Stack.Navigator>
  );
};