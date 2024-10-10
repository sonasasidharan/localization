import React from 'react';
import { View, Switch, Text } from 'react-native';
import styles from './SwitchStyle'

export default function SwitchAtom({ label, value, onValueChange }) {
  return (
    <View style={styles.container}>
      <Switch value={value} onValueChange={onValueChange} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}


