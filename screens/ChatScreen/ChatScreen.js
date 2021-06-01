import React, {useState, useContext, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
} from 'react-native';
import SendSvg from '../../assets/svgs/c-send.svg';
import {Colors, Constants} from '../../global/Index';
import UpArrowSvg from '../../assets/svgs/c-uparrow.svg';
import CameraSvg from '../../assets/svgs/c-camera.svg';
import GallerySvg from '../../assets/svgs/c-gallery.svg';
import DocSvg from '../../assets/svgs/c-doc.svg';
import LocationSvg from '../../assets/svgs/c-location.svg';
import ContactSvg from '../../assets/svgs/c-contact.svg';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../../navigation/AuthProvider';
import {styles} from './ChatScreenStyles';

const ChatScreen = ({navigation}) => {
  const [show, setShow] = useState('');
  const showModal = () => setShow(value => true);
  const hideModal = () => setShow(value => false);
  const [message, setmessage] = useState('');
  NetInfo.addEventListener(state => {
    console.log('Connection type', state.type);
    state.isConnected
      ? console.log('connected')
      : console.log('conncetion loss');
  });
  const msg = [
    {
      bob: 'flex-end',
      time: '2:00PM',
      message: 'Hii',
    },
    {
      bob: 'flex-start',
      time: '2:00PM',
      message: 'Hello',
    },
    {
      bob: 'flex-end',
      time: '2:00PM',
      message: 'Hii',
    },
    {
      bob: 'flex-start',
      time: '2:00PM',
      message: 'Hello',
    },
    {
      bob: 'flex-end',
      time: '2:00PM',
      message: 'Hii',
    },
    {
      bob: 'flex-start',
      time: '2:00PM',
      message: 'Hello',
    },
    {
      bob: 'flex-end',
      time: '2:00PM',
      message: 'Hii',
    },
    {
      bob: 'flex-start',
      time: '2:00PM',
      message: 'Hello',
    },
    {
      bob: 'flex-end',
      time: '2:00PM',
      message: 'Hii',
    },
    {
      bob: 'flex-start',
      time: '2:00PM',
      message: 'Hello',
    },
    {
      bob: 'flex-end',
      time: '2:00PM',
      message: 'Hii',
    },
    {
      bob: 'flex-start',
      time: '2:00PM',
      message: 'Hello',
    },
    {
      bob: 'flex-end',
      time: '2:00PM',
      message: 'Hii',
    },
    {
      bob: 'flex-start',
      time: '2:00PM',
      message: 'Hello',
    },
    {
      bob: 'flex-end',
      time: '2:00PM',
      message: 'Hii',
    },
    {
      bob: 'flex-start',
      time: '2:00PM',
      message: 'Hello',
    },
    {
      bob: 'flex-end',
      time: '2:00PM',
      message: 'Hii',
    },
    {
      bob: 'flex-start',
      time: '2:00PM',
      message: 'Hello',
    },
    {
      bob: 'flex-end',
      time: '2:00PM',
      message: 'Hii',
    },
    {
      bob: 'flex-start',
      time: '2:00PM',
      message: 'Hello',
    },
  ];

  const ModalView = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        style={{height: 300, width: 300}}>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            position: 'absolute',
            height: 120,
            width: 180,
            position: 'relative',
            bottom: 0,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity style={{margin: 10}}>
              <CameraSvg />
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 10}}>
              <GallerySvg />
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 10}}>
              <DocSvg />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity style={{margin: 10}}>
              <LocationSvg />
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 10}}>
              <ContactSvg />
            </TouchableOpacity>
            <TouchableOpacity onPress={hideModal} style={{margin: 10}}>
              <UpArrowSvg
                height={30}
                width={30}
                style={{transform: [{rotate: '180deg'}]}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <LinearGradient colors={['#ffeaa7', '#ecf0f1']} style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView>
          {msg.map((item, index) => {
            return (
              <View style={{alignItems: item.bob}}>
                <Text
                  value={index}
                  style={{
                    marginHorizontal: 20,
                  }}></Text>
                <View
                  style={{
                    marginHorizontal: 20,
                    backgroundColor: Colors.WHITE,
                    padding: 10,
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}>
                  <Text> {item.message}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            margin: 20,
          }}>
          {/* upButton */}
          <TouchableOpacity onPress={showModal}>
            <ModalView />
            <UpArrowSvg height={50} width={50} />
          </TouchableOpacity>
          {/* messagebox */}
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Type a message..."
              placeholderTextColor="#003f5c"></TextInput>
          </View>
          {/* sendButton */}
          <TouchableOpacity onPress={() => {}} style={{right: 50}}>
            <SendSvg height={50} width={50} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default ChatScreen;
