import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function AuthInput({
  name,
  value,
  placeholder,
  handleChangeText,
}) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const toggleVisiblePswrd = () => {
    setVisiblePassword(prev => !prev);
  };

  const toggleFocused = () => {
    setIsFocused(prev => !prev);
  };
  return (
    <>
      {name === 'password' ? (
        <View style={styles.pswrdWrapper}>
          <TextInput
            name={name}
            value={value}
            placeholder={placeholder}
            secureTextEntry={!visiblePassword}
            style={[styles.input, isFocused && styles.focusedInput]}
            onFocus={toggleFocused}
            onBlur={toggleFocused}
            onChangeText={handleChangeText}
          />
          <TouchableOpacity
            onPress={toggleVisiblePswrd}
            style={styles.visibleBtn}
          >
            <Text style={styles.visibleBtnText}>
              {visiblePassword ? 'Приховати' : 'Показати'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          name={name}
          value={value}
          placeholder={placeholder}
          style={[styles.input, isFocused && styles.focusedInput]}
          onFocus={toggleFocused}
          onBlur={toggleFocused}
          onChangeText={handleChangeText}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Roboto-Regular',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 6,
  },
  focusedInput: {
    borderColor: '#FF6C00',
    backgroundColor: '#ffffff',
  },
  pswrdWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  visibleBtn: {
    position: 'absolute',
    right: 10,
  },
  visibleBtnText: {
    fontFamily: 'Roboto-Regular',
    color: '#1B4371',
  },
});
