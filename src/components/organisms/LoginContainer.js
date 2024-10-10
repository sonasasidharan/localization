import React, { useState } from 'react';
import { View, Alert, TouchableOpacity, Text } from 'react-native';
import SwitchAtom from '../atoms/Switch';
import SocialLoginButtons from '../molicules/SocialLoginButtons';
import TextComponent from '../atoms/TextComponent';
import TouchLoginButton from '../molicules/TouchLoginButton';
import ButtonAtom from '../atoms/Button';
import LoginForm from '../molicules/LoginForm'
import i18n from '../../i18n'
import styles from './LoginContainerStyle'



export default function LoginContainer({
  username,
  setUsername,
  password,
  setPassword,
  isPasswordVisible,
  setIsPasswordVisible,
  remember,
  setRemember,
  handleLogin
}) {
  const [locale, setLocale] = useState(i18n.locale);

  const changeLanguage = (lang) => {
    i18n.locale = lang;
    setLocale(lang);
  };

  return (
    <View style={styles.card}>
      <View style={styles.buttons}>
        <ButtonAtom style={styles.langChangeButton} title="English" onPress={() => changeLanguage('en')} />
        <ButtonAtom style={styles.langChangeButton} title="Français" onPress={() => changeLanguage('fr')} />
      </View>

      <TextComponent style={styles.title} label={i18n.t('loginTitle')} />
      <TextComponent style={styles.policyText} label={i18n.t('policyText')} />
      <TextComponent style={styles.link} label={i18n.t('termsPolicy')} />


      <View style={styles.switchContainer}>
        <TextComponent style={styles.switchText} label={i18n.t('login')} />
        <TextComponent style={[styles.switchText, styles.inactiveText]}  label={i18n.t('register')}/>
      </View>

      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        isPasswordVisible={isPasswordVisible}
        setIsPasswordVisible={setIsPasswordVisible}
        handleLogin={handleLogin}
      />

      <View style={styles.optionsContainer}>
        <SwitchAtom label={i18n.t('rememberPassword')} value={remember} onValueChange={(newValue) => setRemember(newValue)} />

        <TouchableOpacity onPress={() => Alert.alert(i18n.t('forgotPassword'), 'Please reset your password')}>
          <TextComponent style={styles.forgotText} label={i18n.t('forgotPassword')}/>
        </TouchableOpacity>
      </View>

      <ButtonAtom title={i18n.t('login')} onPress={handleLogin} />

      <TextComponent style={styles.connectText} label={i18n.t('orConnectWith')}/>
      <SocialLoginButtons />
      <View style={styles.container}>
        <TouchLoginButton onPress={() => Alert.alert(i18n.t('touchLogin'), 'Login with touch')} />
      </View>
    </View>
  );
}



