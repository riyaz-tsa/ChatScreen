import React from 'react';
import {View, Text} from 'react-native';
import {Colors, Constants} from '../../../global/Index';

const MessageBox = props => (
  <View style={{alignItems: 'flex-end'}}>
    <Text style={{fontSize: 10, margin: 5}}>1 min ago</Text>
    <View
      style={{
        backgroundColor: Colors.WHITE,
        marginBottom: 20,
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopStartRadius: 10,
      }}>
      <Text style={{fontSize: 18}}>{props.name}</Text>
    </View>
  </View>
);

export default MessageBox;
