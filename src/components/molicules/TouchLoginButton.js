// src/components/molecules/TouchLoginButton.js
import React from 'react';
import { View, Image, TouchableOpacity, Text,  ImageBackground } from 'react-native';
import styles from './TouchButtonStyle'

export default function TouchLoginButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.touchLoginButton}>
      <View style={styles.overlay}>
        <ImageBackground source={require('../../../assets/16.jpg')} style={styles.footerBackground} resizeMode='cover' />
        <ImageBackground source={require('../../../assets/15.png')} style={styles.footerBack} resizeMode='cover' />
        <TouchableOpacity onPress={onPress}>
          <Image source={require('../../../assets/8.png')} style={styles.touchIcon} />
        </TouchableOpacity>
        <Text style={styles.touchLoginText}>Login with touch</Text>
      </View>
    </TouchableOpacity>
  );
}


