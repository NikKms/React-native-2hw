import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';
import bg from '../../assets/img/AuthBg.jpg';
import Profile from '../components/Profile';

export default function ProfileScreen() {
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
          keyboardVerticalOffset={-190}
        >
          <FlatList
            data={[{ key: 'profile' }]}
            renderItem={({ item }) => (
              <View style={styles.bg}>
                <ImageBackground
                  source={bg}
                  style={styles.imageBackground}
                >
                  <Profile />
                </ImageBackground>
              </View>
            )}
          />
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
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
