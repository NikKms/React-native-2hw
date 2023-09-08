import React from 'react';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import bg from '../../assets/img/AuthBg.jpg';
import RegisterForm from '../components/RegisterForm';
import Profile from '../components/Profile';

export default function RegistrationScreen() {
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
          keyboardVerticalOffset={-190}
        >
          <View style={styles.bg}>
            <ImageBackground
              source={bg}
              style={styles.bg}
            >
              <Profile />
            </ImageBackground>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
