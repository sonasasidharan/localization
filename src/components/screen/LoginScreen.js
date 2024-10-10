import React from 'react';
import LoginTemplate from '../templates/LoginTemplate';
import { Alert, View } from 'react-native';

const LoginScreen = () => {

  // const changeLanguage=(lang)=>{
  //   i18n.locale=lang
  // }

  const handleLogin = (username, password) => {
    if (username === 'sona' && password === '123') {
      Alert.alert('Login Successful', `Welcome, ${username}!`);
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <View>
      <LoginTemplate onLogin={handleLogin} />
   
    </View>
  )
};

export default LoginScreen;
