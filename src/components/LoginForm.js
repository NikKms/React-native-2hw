import React from 'react';
import AuthForm from './AuthForm';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Увійти</Text>
      <AuthForm />

      <View style={styles.loginInfoWrapper}>
        <Text style={styles.loginInfoText}>Немає акаунту?</Text>
        <TouchableOpacity>
          <Text style={styles.registerText}> Зареєструватися</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 120,
    alignItems: 'center',
  },

  titleText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 32,
  },

  loginInfoText: {
    fontFamily: 'Roboto-Regular',
    marginTop: 16,
    fontSize: 16,
    color: '#1B4371',
  },

  loginInfoWrapper: {
    flexDirection: 'row',
  },

  registerText: {
    fontFamily: 'Roboto-Regular',
    marginTop: 16,
    fontSize: 16,
    color: '#1B4371',
  },
});
