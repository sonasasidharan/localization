import React from 'react';
import { View, Image } from 'react-native';
import styles from './SocialButtonStyle'

const SocialLoginButtons = () => (
  <View style={styles.socialIconsContainer}>
    <Image source={require('../../../assets/3.jpeg')} style={styles.icon} />
    <Image source={require('../../../assets/insta.png')} style={styles.icon} />
    <Image source={require('../../../assets/5.webp')} style={styles.icon} />
    <Image source={require('../../../assets/6.webp')} style={styles.icon} />
  </View>
);


export default SocialLoginButtons;
