import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;

export default function CommetsInput({ comment, setComment, handleComment }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        // onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(false)}
        onChangeText={setComment}
        value={comment}
        placeholder='Коментувати...'
      />
      <TouchableOpacity
        onPress={() => handleComment(comment)}
        style={styles.btn}
      >
        <AntDesign
          name='arrowup'
          size={20}
          color='#fff'
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  input: {
    width: '100%',
    height: screenHeight * 0.06,
    paddingHorizontal: 16,
    paddingVertical: 5,
    backgroundColor: '#f6f6f6',
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: '#e8e8e8',
    borderStyle: 'solid',
    marginBottom: 16,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 34,
    height: 34,
    backgroundColor: '#FF6C00',
    position: 'absolute',
    right: 10,
    top: 7,
    borderRadius: 50,
  },
});
