import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function AuthButton({ text, onPress }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        navigation.navigate('AuthorizedNavTab');
      }}
      style={styles.btn}
    >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#FF6C00',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },
  btnText: {
    fontFamily: 'Roboto-Regular',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
