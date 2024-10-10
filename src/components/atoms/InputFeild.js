import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './InputFeildStyle'

const InputField = ({ iconSource, placeholder, value, onChangeText, secureTextEntry }) => (
  <View style={styles.inputContainer}>
    {iconSource && <Image source={iconSource} style={styles.touchIcon} />}
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.input}
    />
  </View>
);


export default InputField;
