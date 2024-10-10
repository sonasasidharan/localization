import React from 'react';
import { Text } from 'react-native';
import styles from './TextComponentStyle'

const TextComponent = ({ label, style }) => (
  <Text style={[styles.text, style]}>{label}</Text>
);

export default TextComponent;
