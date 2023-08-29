import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Formik } from 'formik';

export default function AuthForm() {
  const [visiblePswrd, setVisiblePswrd] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const toggleVisiblePswrd = () => {
    setVisiblePswrd(prev => !prev);
  };

  const handleFocusEmail = () => {
    setFocusedEmail(true);
    setFocusedPassword(false);
  };

  const handleFocusPassword = () => {
    setFocusedEmail(false);
    setFocusedPassword(true);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          console.log('values', values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <View style={styles.inputContainer}>
            <TextInput
              value={values.email}
              placeholder='Адреса електронної пошти'
              onChangeText={handleChange('email')}
              autoCompleteType='email'
              autoCapitalize='none'
              style={[styles.input, focusedEmail && styles.focusedInput]}
              onFocus={handleFocusEmail}
            />
            <View style={styles.pswrdWrapper}>
              <TextInput
                value={values.password}
                placeholder='Пароль'
                onChangeText={handleChange('password')}
                autoCompleteType='password'
                secureTextEntry={!visiblePswrd}
                style={[styles.input, focusedPassword && styles.focusedInput]}
                onFocus={handleFocusPassword}
              />
              <TouchableOpacity
                onPress={toggleVisiblePswrd}
                style={styles.visibleBtn}
              >
                <Text style={styles.visibleBtnText}>
                  {visiblePswrd ? 'Приховати' : 'Показати'}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.btn}
            >
              <Text style={styles.btnText}>Увійти</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    rowGap: 16,
  },
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
