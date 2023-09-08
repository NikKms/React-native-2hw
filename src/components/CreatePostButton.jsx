import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CreatePostButton({
  uploadPhoto,
  values,
  handleSubmit,
}) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.btn, (!uploadPhoto || !values) && styles.btnDisabled]}
        disabled={!uploadPhoto || !values}
        onPress={handleSubmit}
      >
        <Text
          style={[
            styles.btnText,
            (!uploadPhoto || !values) && styles.btnTextDisabled,
          ]}
        >
          Зберегти
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnDisabled: {
    backgroundColor: '#F6F6F6',
  },
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
  btnTextDisabled: {
    color: '#BDBDBD',
  },
});
