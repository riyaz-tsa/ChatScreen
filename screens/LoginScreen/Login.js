import React, {useState, useContext} from 'react';
import {AuthContext} from '../../navigation/AuthProvider';
import LottieView from 'lottie-react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Colors} from '../../global/Index';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <LottieView
        style={{
          height: 100,
          width: 100,
          marginBottom: 40,
        }}
        source={require('../../assets/json/login.json')}
        autoPlay
        loop
      />

      <View style={styles.inputView}>
        <TextInput
          value={email}
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={userEmail => setEmail(userEmail)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          value={password}
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={userPassword => setPassword(userPassword)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => login(email, password)}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', padding: 20}}>
        <Text>I don't have a account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{fontWeight: 'bold'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 30,
    width: '80%',
    height: 50,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: 'black',
  },

  forgot_button: {
    height: 30,
  },

  loginBtn: {
    width: '60%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: Colors.PRIMARY,
  },
  loginText: {
    color: Colors.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
