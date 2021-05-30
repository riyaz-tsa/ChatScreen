import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {WHITE} from '../global/Colors';
import {Colors} from '../global/Index';
export default function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <LottieView
        source={require('../assets/json/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
