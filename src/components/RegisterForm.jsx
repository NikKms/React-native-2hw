import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import AuthTitleTitle from './AuthTitle';
import AuthInput from './AuthInput';
import AuthButton from './AuthButton';
import Avatar from './Avatar';
import { useNavigation } from '@react-navigation/native';

const initialValues = { name: '', email: '', password: '' };

export default function RegisterForm() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Avatar />
      <AuthTitleTitle text='Реєстрація' />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log('values', values);
          resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <View style={styles.inputWrapper}>
            <AuthInput
              name='name'
              value={values.name}
              placeholder='Логін'
              handleChangeText={handleChange('name')}
            />
            <AuthInput
              name='email'
              value={values.email}
              placeholder='Адреса електронної пошти'
              handleChangeText={handleChange('email')}
            />
            <AuthInput
              name='password'
              value={values.password}
              placeholder='Пароль'
              handleChangeText={handleChange('password')}
            />
            <AuthButton
              text='Зареєструватися'
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <View style={styles.loginInfoWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginInfoText}>Вже є акаунт? Увійти</Text>
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
    paddingTop: 92,
    paddingBottom: 78,
    alignItems: 'center',
  },

  inputWrapper: {
    gap: 16,
    width: '100%',
  },

  loginInfoWrapper: {
    marginTop: 16,
    flexDirection: 'row',
  },

  loginInfoText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
  },

  registerText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
  },
});
