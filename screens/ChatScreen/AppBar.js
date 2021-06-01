import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useContext, useState} from 'react';
import {styles} from './ChatScreenStyles';
import {Colors, Constants} from '../../global/Index';
import BlockSvg from '../../assets/svgs/c-block.svg';
import PhoneSvg from '../../assets/svgs/c-call.svg';
import CalendarSvg from '../../assets/svgs/c-calendar.svg';
import {AuthContext} from '../../navigation/AuthProvider';
import Loading from '../../components/Loading';
import firestore from '@react-native-firebase/firestore';
const AppBar = () => {
  const {user, logout} = useContext(AuthContext);
  const [profile, setProfile] = useState('');
  useEffect(() => {
    firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(docSnap => {
        setProfile(docSnap.data());
      });
  }, []);
  if (!profile) {
    return <Loading />;
  }
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
          backgroundColor: Colors.WHITE,
          padding: 10,
          borderRadius: 20,
        }}>
        <BlockSvg />
        <TouchableOpacity
          onPress={() => {
            logout();
            console.log('logout');
          }}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={styles.circleAvtar}
        />
        <View style={{right: 50}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>{profile.name}</Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              color: Colors.GRAY_MEDIUM,
              marginTop: 5,
            }}>
            {profile.email}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('GiftedChat')}>
            <PhoneSvg style={{margin: 10}} />
          </TouchableOpacity>
          <CalendarSvg style={{margin: 10}} />
        </View>
      </View>
    </View>
  );
};
export default AppBar;
