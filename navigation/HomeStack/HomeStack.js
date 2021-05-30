import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/ChatScreen/ChatScreen';
import {GiftedChat} from 'react-native-gifted-chat';
const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="GiftedChat" component={GiftedChat} />
    </Stack.Navigator>
  );
}
