import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/LoginScreen/Login';
import Register from '../../screens/RegisterScreen/register';

const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen name="Signup" component={Register} />
    </Stack.Navigator>
  );
}
