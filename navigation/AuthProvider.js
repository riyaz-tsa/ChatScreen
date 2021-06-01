import React, {createContext, useState} from 'react';
import Snackbar from 'react-native-snackbar';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Loading from '../components/Loading';
export const AuthContext = createContext({});
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState('');
  if (loading) {
    return <Loading />;
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            alert('something went wrong ' + e);
            console.log(e);
          }
        },
        register: async (name, email, password) => {
          try {
            const result = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );

            firestore().collection('users').doc(result.user.uid).set({
              name: name,
              email: result.user.email,
              uid: result.user.uid,
              status: 'online',
            });
            console.log('Login Sucessfully');
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await firestore()
              .collection('users')
              .doc(user.uid)
              .update({
                status: firestore.FieldValue.serverTimestamp(),
              })
              .then(() => {
                auth().signOut();
              });
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
