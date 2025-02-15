import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './ButtonStyle'

export default function ButtonAtom({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}


