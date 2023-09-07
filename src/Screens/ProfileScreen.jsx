import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles}>
      <Text>ProfileScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: 1,
  alignItem: 'center',
  justifyContent: 'center',
  backgroundColor: 'blue',
});
