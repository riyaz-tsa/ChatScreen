import React, {useState, useContext} from 'react';
import Snackbar from 'react-native-snackbar';
import BottomDrawer from 'react-native-bottom-drawer-view';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import SendSvg from '../../assets/svgs/c-send.svg';
import {Colors, Constants} from '../../global/Index';
import UpArrowSvg from '../../assets/svgs/c-uparrow.svg';
import BlockSvg from '../../assets/svgs/c-block.svg';
import PhoneSvg from '../../assets/svgs/c-call.svg';
import CalendarSvg from '../../assets/svgs/c-calendar.svg';
import CameraSvg from '../../assets/svgs/c-camera.svg';
import GallerySvg from '../../assets/svgs/c-gallery.svg';
import DocSvg from '../../assets/svgs/c-doc.svg';
import LocationSvg from '../../assets/svgs/c-location.svg';
import ContactSvg from '../../assets/svgs/c-contact.svg';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../../navigation/AuthProvider';
import {styles} from './ChatScreenStyles';
const ChatScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  const [show, setShow] = useState('');
  const showModal = () => setShow(value => true);
  const hideModal = () => setShow(value => false);
  const [text, setText] = useState('');
  return (
    <KeyboardAvoidingView>
      <LinearGradient colors={['#ffeaa7', '#ecf0f1']} style={styles.container}>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              backgroundColor: Colors.WHITE,
              padding: 10,
              backgroundColor: Colors.MUNSELL,
              borderRadius: 20,
            }}>
            <BlockSvg />
            <Text
              onPress={() => {
                logout();
              }}>
              Block
            </Text>
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
            <View>
              <Text style={{fontSize: 20, fontWeight: '700'}}>
                {user.email}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '700',
                  color: Colors.GRAY_MEDIUM,
                  marginTop: 5,
                }}>
                Business Owner
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('GiftedChat')}>
                <PhoneSvg style={{margin: 10}} />
              </TouchableOpacity>
              <CalendarSvg style={{margin: 10}} />
            </View>
          </View>
        </View>

        <BottomDrawer
          containerHeight={100}
          offset={40}
          backgroundColor="transparent">
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={showModal}>
              <UpArrowSvg height={50} width={50} />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', padding: 0}}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={show}
                style={{height: 300, width: 300}}>
                <View
                  style={{
                    backgroundColor: Colors.WHITE,
                    height: 120,
                    width: 180,
                    margin: 20,
                    top: '73%',
                    borderRadius: 10,
                    padding: 10,
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
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Type a message..."
                  placeholderTextColor="#003f5c"></TextInput>
              </View>
              <TouchableOpacity
                onPress={() => {
                  Snackbar.show({
                    text: 'Send Messages',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor: Colors.PRIMARY,
                    textColor: Colors.BLACK,
                  });
                }}
                style={{right: 50}}>
                <SendSvg height={50} width={50} />
              </TouchableOpacity>
            </View>
          </View>
        </BottomDrawer>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
