import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function MapScreen() {
  return (
    <View style={styles}>
      <Text>MapScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: 1,
  alignItem: 'center',
  justifyContent: 'center',
  backgroundColor: 'grey',
});
