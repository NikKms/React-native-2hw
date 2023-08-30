import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Title({ text }) {
  return <Text style={styles.titleText}>{text}</Text>;
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 32,
  },
});
