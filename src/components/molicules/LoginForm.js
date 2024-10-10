
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import InputField from '../atoms/InputFeild';
import styles from './LoginFormStyle'

const LoginForm = ({ 
  username, 
  setUsername, 
  password, 
  setPassword, 
  isPasswordVisible, 
  setIsPasswordVisible 
}) => (
  <View style={styles.container}>
    
    <View style={styles.usercontainer}>
    <InputField
      iconSource={require('../../../assets/1.png')}
      placeholder="User name"
      value={username}
      onChangeText={setUsername}
    />
    </View>

    
    <View style={styles.passwordContainer}>
      <InputField
        iconSource={require('../../../assets/2.png')}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordVisible}
        style={styles.passwordInput}
      />
      <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
        <Image source={require('../../../assets/7.webp')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  </View>
);



export default LoginForm;

