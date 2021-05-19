import React, {useState} from 'react';

import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import BackSvg from '../../assets/svgs/c-back icon.svg';
import SendSvg from '../../assets/svgs/c-send.svg';
import MenuSvg from '../../assets/svgs/c- three dots.svg';
import {Colors, Constants} from '../../global/Index';
import {styles} from './ChatScreenStyles';
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
import Msgbox from '../components/MessageBox/MessageBox';

const ChatScreen = props => {
  const [show, setShow] = useState('');
  const showModal = () => setShow(value => true);
  const hideModal = () => setShow(value => false);
  const [text, setText] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'null'}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        showHideTransition="none"
      />
      <LinearGradient colors={['#ffeaa7', '#ecf0f1']} style={styles.container}>
        <View
          style={{
            padding: 20,
            height: 180,
            borderBottomStartRadius: 20,
            borderBottomEndRadius: 20,
            marginRight: 6,
            backgroundColor: Colors.WHITE,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.12,
            shadowRadius: 10,
            elevation: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <BackSvg height={30} width={25} />
              <Text style={{fontSize: 18, fontWeight: '700', marginTop: 5}}>
                Message
              </Text>
            </View>
            <MenuSvg height={30} width={20} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              backgroundColor: Colors.WHITE,
              padding: 10,
              borderRadius: 15,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.12,
              shadowRadius: 0.8,
              elevation: 10,
            }}>
            <BlockSvg />
            <Text style={{marginLeft: 10}}>Block</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image
              source={require('../../assets/images/profile.jpg')}
              style={styles.circleAvtar}
            />
            <View style={{marginRight: 40, marginVertical: 10}}>
              <Text style={{fontSize: 20, fontWeight: '700'}}>
                Bhavesh Vora
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
              <PhoneSvg style={{margin: 10}} />
              <CalendarSvg style={{margin: 10}} />
            </View>
          </View>
        </View>
        <ScrollView
          style={{
            paddingVertical: 20,
            paddingHorizontal: 40,
          }}>
          <Msgbox
            name={text
              .split(' ')
              .map(word => word)
              .join(' ')}></Msgbox>
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
              <Text style={{fontSize: 18}}>Hello!</Text>
            </View>
          </View>
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
              <Text style={{fontSize: 18}}>
                It's Sapphire. I want to meet you on urgent basis!
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={{fontSize: 10, margin: 5}}>1 min ago</Text>
            <View
              style={{
                backgroundColor: '#f6e58d',
                marginBottom: 20,
                padding: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}>
              <Text style={{fontSize: 18}}>Why!</Text>
            </View>
          </View>
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
              <Text style={{fontSize: 18}}>
                Yah! I have an Urgent requirement.
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={{fontSize: 10, margin: 5}}>1 min ago</Text>
            <View
              style={{
                backgroundColor: '#f6e58d',
                marginBottom: 20,
                padding: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}>
              <Text style={{fontSize: 18}}>
                Yeah,Sure I will meet you in 5 mins.
              </Text>
            </View>
          </View>
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
              <Text style={{fontSize: 18}}>Thanks</Text>
            </View>
          </View>
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
              <Text style={{fontSize: 18}}>Hello!</Text>
            </View>
          </View>
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
              <Text style={{fontSize: 18}}>
                It's Sapphire. I want to meet you on urgent basis!
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={{fontSize: 10, margin: 5}}>1 min ago</Text>
            <View
              style={{
                backgroundColor: Colors.WHITE,
                marginBottom: 20,
                padding: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}>
              <Text style={{fontSize: 18}}>Why!</Text>
            </View>
          </View>
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
              <Text style={{fontSize: 18}}>
                Yah! I have an Urgent requirement.
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={{fontSize: 10, margin: 5}}>1 min ago</Text>
            <View
              style={{
                backgroundColor: '#f6e58d',
                marginBottom: 20,
                padding: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}>
              <Text style={{fontSize: 18}}>
                Yeah,Sure I will meet you in 5 mins.
              </Text>
            </View>
          </View>
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
              <Text style={{fontSize: 18}}>Thanks</Text>
            </View>
          </View>
        </ScrollView>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={showModal}
            style={{marginVertical: 40, marginHorizontal: 20}}>
            <UpArrowSvg height={50} width={50} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', padding: 0}}>
            <View style={styles.sendContain}>
              <TextInput
                placeholderTextColor="#c8d6e5"
                placeholder="Write a message"
                onChangeText={text => setText(text)}
                defaultValue={text}
                style={{
                  color: 'black',
                  width: 300,
                  marginRight: 40,
                  paddingHorizontal: 20,
                  borderRadius: 25,
                  height: 50,
                  backgroundColor: 'white',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              />
              <TouchableWithoutFeedback onPress={() => print('helo')}>
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
                      <TouchableOpacity
                        onPress={hideModal}
                        style={{margin: 10}}>
                        <UpArrowSvg
                          height={30}
                          width={30}
                          style={{transform: [{rotate: '180deg'}]}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </TouchableWithoutFeedback>
              <TouchableOpacity style={styles.sendbtn}>
                <SendSvg height={50} width={50} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
